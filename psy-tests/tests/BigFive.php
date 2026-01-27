<?php
require_once __DIR__ . '/../AbstractTest.php';

class BigFiveTest extends AbstractTestClass
{
    public static $id = 'b5';
    public static $title = 'Big Five';

    public static $mailerlite_group_id = '177241744727868962';

    public static function registerHooks()
    {
        //register api endpoint
        add_action('rest_api_init', [__CLASS__, 'registerApi']);
    }

    public static function registerApi()
    {
        // POST endpoint for submitting test results
        register_rest_route('psy-tests/v1', '/big-five/submit', array(
            'methods' => 'POST',
            'callback' => [__CLASS__, 'handleSubmit'],
            'permission_callback' => '__return_true', // Allow public submissions
        ));

        // POST endpoint for comparing test results
        register_rest_route('psy-tests/v1', '/big-five/compare', array(
            'methods' => 'POST',
            'callback' => [__CLASS__, 'handleCompare'],
            'permission_callback' => '__return_true', // Allow public submissions
        ));

        // POST endpoint for retrieving test using code
        register_rest_route('psy-tests/v1', '/big-five/id', array(
            'methods' => 'POST',
            'callback' => [__CLASS__, 'handleTestIdRequest'],
            'permission_callback' => '__return_true', // Allow public access
        ));
    }

    public static function handleSubmit(WP_REST_Request $request)
    {
        $params = $request->get_json_params();

        // Validate required fields
        if (empty($params)) {
            return new WP_REST_Response(
                array('error' => 'No data provided'),
                400
            );
        }

        // Get test_page_id from URL parameter
        $test_page_id = $request->get_param('test_page_id');

        global $wpdb;

        // Generate short, human-friendly code (5 alphanumeric characters)
        $code = substr(str_shuffle('ABCDEFGHJKLMNOPQRSTUVWXYZ123456789'), 0, 5);

        $wpdb->insert(
            $wpdb->prefix . 'psy_tests',
            array(
                'test_id' => $test_page_id,
                'reference' => self::$id,
                'code' => $code,
                'user_id' => get_current_user_id(),
                'email' => isset($params['email']) ? sanitize_email($params['email']) : '',
                'name' => isset($params['name']) ? sanitize_text_field($params['name']) : '',
                'submitted_at' => current_time('mysql'),
                'time' => isset($params['timeElapsed']) ? intval($params['timeElapsed']) : 0,
                'answers' => maybe_serialize($params['answers']),
                'status' => 'completed',
            )
        );

        // Check for errors
        if ($wpdb->last_error) {
            return new WP_REST_Response(
                array('error' => $wpdb->last_error),
                500
            );
        }


        $result_page_id = get_post_meta($test_page_id, 'psy_test_results_page', true);

        if (!empty($params['email']) && $result_page_id && defined('MAILERLITE_API_KEY')) {
            $user_email = sanitize_email($params['email']);
            $user_name = isset($params['name']) ? sanitize_text_field($params['name']) : '';
            $result_url = get_permalink($result_page_id) . '?test_result=' . $code;


            $payload = [
                'email' => $user_email,
                'fields' => [
                    'Name' => $user_name,
                    'b5_test_result_url' => $result_url,
                    'b5_test_code' => $code
                ],
                'groups' => [
                    self::$mailerlite_group_id
                ]
            ];


            $response = wp_remote_post(
                'https://connect.mailerlite.com/api/subscribers',
                [
                    'headers' => [
                        'Authorization' => 'Bearer ' . MAILERLITE_API_KEY,
                        'Content-Type' => 'application/json',
                        'Accept' => 'application/json',
                    ],
                    'body' => wp_json_encode($payload),
                    'timeout' => 10,
                ]
            );

            if (is_wp_error($response)) {
                error_log('MailerLite API error: ' . $response->get_error_message());
            }
        } else if (!empty($params['email']) && $result_page_id) {
            $user_email = sanitize_email($params['email']);
            $user_name = isset($params['name']) ? sanitize_text_field($params['name']) : '';
            $result_url = get_permalink($result_page_id) . '?test_result=' . $code;

            $product_id = get_post_meta( $test_page_id, 'psy_test_product_id', true );

            $product_url = null;
            if ( $product_id ) {
                $product_url = get_permalink( $product_id ) . '?test_result=' . $code;
            }

            $subject = 'Jūsų Big Five testo rezultatai';
            $message = self::getEmailTemplate($user_name, $result_url, $product_url);

            $headers = array(
                'Content-Type: text/html; charset=UTF-8',
                'From: ' . get_bloginfo('name') . ' <' . get_option('admin_email') . '>'
            );

            wp_mail($user_email, $subject, $message, $headers);
        }

        if (!$result_page_id) {
            return new WP_REST_Response(
                array(
                    'success' => true,
                    'id' => $wpdb->insert_id,
                ),
                200
            );
        }

        // Return redirect URL
        return new WP_REST_Response(
            array(
                'success' => true,
                'id' => $wpdb->insert_id,
                'redirectUrl' => get_permalink($result_page_id) . '?test_result=' . $code
            ),
            200
        );
    }

    public static function handleTestIdRequest(WP_REST_Request $request)
    {
        $params = $request->get_json_params();

        if (empty($params['code'])) {
            return new WP_REST_Response(
                array('error' => 'No test_result provided'),
                400
            );
        }

        global $wpdb;

        $code = sanitize_text_field($params['code']);

        $result = $wpdb->get_row($wpdb->prepare(
            "SELECT id, name, email FROM {$wpdb->prefix}psy_tests WHERE code = %s AND reference = %s",
            $code,
            self::$id
        ));

        if (empty($result)) {
            return new WP_REST_Response(
                array('error' => 'Test result not found'),
                404
            );
        }

        return new WP_REST_Response(
            array(
                'success' => true,
                'data' => array(
                    'id' => isset($result->id) ? intval($result->id) : null,
                    'name' => isset($result->name) ? sanitize_text_field($result->name) : null,
                    // 'email' => isset( $result->email ) ? sanitize_email( $result->email ) : null,
                )
            ),
            200
        );
    }

    /**
     * Get email template for test submission
     * 
     * @param string $name User's name
     * @param string $result_url URL to test results
     * @param string|null $product_url Optional URL to product page
     * @return string HTML email content
     */
    private static function getEmailTemplate($name, $result_url, $product_url = null)
    {
        $html = '
<!DOCTYPE html>
<html lang="lt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dėkojame už testo atlikimą</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="background-color: #4CAF50; padding: 30px 20px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 24px;">Dėkojame!</h1>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #333333;">
                                Sveiki,
                            </p>
                            <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #333333;">
                                Dėkojame, kad atlikote Big Five asmenybės testą. Jūsų rezultatai jau paruošti!
                            </p>
                            <p style="margin: 0 0 30px; font-size: 16px; line-height: 1.6; color: #333333;">
                                Norėdami peržiūrėti savo rezultatus, spauskite žemiau esančią nuorodą:
                            </p>
                            
                            <!-- Button -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="padding: 10px 0;">
                                        <a href="' . esc_url($result_url) . '" style="display: inline-block; padding: 15px 40px; background-color: #4CAF50; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 16px; font-weight: bold;">Peržiūrėti rezultatus</a>
                                    </td>
                                </tr>
                            </table>
                            
                            <p style="margin: 30px 0 0; font-size: 14px; line-height: 1.6; color: #666666;">
                                Arba nukopijuokite šią nuorodą į naršyklę:<br>
                                <a href="' . esc_url($result_url) . '" style="color: #4CAF50; word-break: break-all;">' . esc_html($result_url) . '</a>
                            </p>';
        
        if ($product_url) {
            $html .= '
                            <hr style="border: none; border-top: 1px solid #eeeeee; margin: 30px 0;">
                            <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #333333;">
                                Norite sužinoti daugiau apie savo asmenybę? Peržiūrėkite mūsų specialią pasiūlą jums:
                            </p>
                            
                            <!-- Product Button -->
                            <table width="100%" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="padding: 10px 0;">
                                        <a href="' . esc_url($product_url) . '" style="display: inline-block; padding: 15px 40px; background-color: #2196F3; color: #ffffff; text-decoration: none; border-radius: 4px; font-size: 16px; font-weight: bold;">Peržiūrėti pasiūlą</a>
                                    </td>
                                </tr>
                            </table>';
        }
        
        $html .= '
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f9f9f9; padding: 20px 30px; text-align: center; border-top: 1px solid #eeeeee;">
                            <p style="margin: 0; font-size: 12px; color: #999999;">
                                Jei nesate atlikę šio testo, galite ignoruoti šį laišką.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
        ';

        return $html;
    }

    public static function handleCompare(WP_REST_Request $request)
    {
        //should given email array return redirectUrl with test_result codes comma separated
        $params = $request->get_json_params();

        if (empty($params['codes']) || !is_array($params['codes'])) {
            return new WP_REST_Response(
                array('error' => 'No codes provided or invalid format'),
                400
            );
        }

        global $wpdb;

        $placeholders = implode(',', array_fill(0, count($params['codes']), '%s'));

        $results = $wpdb->get_results($wpdb->prepare(
            "SELECT code FROM {$wpdb->prefix}psy_tests WHERE code IN ($placeholders) AND reference = %s",
            array_merge($params['codes'], array(self::$id))
        ));

        if (empty($results)) {
            return new WP_REST_Response(
                array('error' => 'No test results found for the provided codes'),
                404
            );
        }

        $test_page_id = $request->get_param('test_page_id');

        $result_page_id = get_post_meta($test_page_id, 'psy_test_results_page', true);

        if (!$result_page_id) {
            return new WP_REST_Response(
                array(
                    'success' => true,
                    'id' => $wpdb->insert_id,
                ),
                200
            );
        }

        $codes = wp_list_pluck($results, 'code');

        return new WP_REST_Response(
            array(
                'success' => true,
                'redirectUrl' => get_permalink($result_page_id) . '?test_result=' . implode(',', $codes)
            ),
            200
        );
    }

    public static function registerTestAssets($test_page_id, $results = false)
    {

        if ($results) {
            // If rendering results, enqueue additional assets if needed
            // Enqueue JS as an ES module
            wp_enqueue_script_module('big-five-results', PSYTESTS_URL . '/assets/b5/results.js', array(), PSYTESTS_VERSION);
            wp_enqueue_style('big-five-results', PSYTESTS_URL . '/assets/b5/results.css', array(), PSYTESTS_VERSION);
        }

        // Register any JavaScript or CSS assets needed for the test
        wp_enqueue_script_module('big-five-test', PSYTESTS_URL . '/assets/b5/main.js', array(), PSYTESTS_VERSION);
        wp_enqueue_style('big-five-test', PSYTESTS_URL . '/assets/b5/main.css', array(), PSYTESTS_VERSION);

        // Pass config data to the ES module via a global variable
        // wp_localize_script doesn't work with script modules, so we use inline script
        $config = array(
            'SUBMIT_URL' => rest_url('psy-tests/v1/big-five/submit?test_page_id=' . $test_page_id),
            'COMPARE_URL' => rest_url('psy-tests/v1/big-five/compare?test_page_id=' . $test_page_id),
            'TEST_ID_URL' => rest_url('psy-tests/v1/big-five/id'),
            'WP_NONCE' => wp_create_nonce('wp_rest'),
        );

        wp_add_inline_script(
            'wp-hooks', // Use a core script that loads early
            'window.TEST_CONFIG = ' . wp_json_encode($config) . ';',
            'before'
        );
        wp_enqueue_script('wp-hooks'); // Ensure wp-hooks is enqueued
    }

    public static function renderTest($post = null)
    {
        // Return the container div where the React app will mount
        return '<div id="test-root"></div>';
    }

    public static function renderTestResult($test_results, $product = null)
    {
        $data = array();

        foreach ($test_results as $test_result) {
            $answers = maybe_unserialize(isset($test_result->answers) ? $test_result->answers : '');

            $result_output = array(
                'id' => isset($test_result->id) ? intval($test_result->id) : null,
                'test_id' => isset($test_result->test_id) ? intval($test_result->test_id) : null,
                'name' => isset($test_result->name) ? sanitize_text_field($test_result->name) : null,
                'code' => isset($test_result->code) ? sanitize_text_field($test_result->code) : null,
                'reference' => isset($test_result->reference) ? $test_result->reference : null,
                'user_id' => isset($test_result->user_id) ? intval($test_result->user_id) : null,
                'email' => isset($test_result->email) ? sanitize_email($test_result->email) : null,
                'submitted_at' => isset($test_result->submitted_at) ? $test_result->submitted_at : null,
                'time' => isset($test_result->time) ? intval($test_result->time) : 0,
                'status' => isset($test_result->status) ? $test_result->status : null,
                'answers' => $answers,
            );

            $data[] = $result_output;
        }

        return '<div data-product="' . esc_attr($product) . '" id="test-result" data-result="' . esc_attr(json_encode($data)) . '"></div><div id="test-root"></div>';
    }
}