<?php

class PsyTests {
    private $tests = [];

    public function __construct($tests = []) {
        $this->tests = $tests;

        $this->registerHooks();
    }

    public function registerHooks() {
        add_action( 'init', [$this, 'init'] );
        add_action( 'acf/init', [$this, 'registerAcfFields'] );
        add_filter( 'the_content', [$this, 'overrideTestContent'] );
        add_action( 'wp_enqueue_scripts', [$this, 'registerTestAssets'] );

        foreach ( $this->tests as $test ) {
            if ( class_exists( $test['class'] ) ) {
                $test_class = $test['class'];
                $test_class::registerHooks();
            }
        }
    }

    public function activate() {
        $this->createDatabaseTables();
        $this->registerCustomPostType(); 
        flush_rewrite_rules(); 
    }

    private function createDatabaseTables() {
        global $wpdb;

        $charset_collate = $wpdb->get_charset_collate();

        $table_name = $wpdb->prefix . 'psy_tests';

        /*
            reference - test class identifier
            code - unique code for a test result
            test_id - the ID of the test post that started the test
        */
        $sql = "CREATE TABLE IF NOT EXISTS `{$table_name}` (
            `id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
            `test_id` BIGINT(20) UNSIGNED NULL,
            `reference` VARCHAR(100) NULL,
            `code` VARCHAR(64),
            `user_id` BIGINT(20) UNSIGNED NULL,
            `name` VARCHAR(100) NULL,
            `email` VARCHAR(100) NULL,
            `submitted_at` DATETIME NULL,
            `time` INT(11) DEFAULT 0,
            `answers` LONGTEXT NOT NULL,
            `status` VARCHAR(20) DEFAULT 'in_progress',
            PRIMARY KEY (`id`),
            KEY `test_id` (`test_id`),
            KEY `user_id` (`user_id`),
            KEY `reference` (`reference`)
        ) $charset_collate;";

        require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
        dbDelta( $sql );
    }

    public function deactivate() {
        flush_rewrite_rules(); 
    }

    public static function uninstall() {
        global $wpdb;

        $table_name = $wpdb->prefix . 'psy_tests';
        $sql = "DROP TABLE IF EXISTS $table_name;";

        $wpdb->query($sql);
    }
    
    public function init() {
         $this->registerCustomPostType();
    }

    public function registerCustomPostType() {
        $labels = array(
            'name'                  => _x( 'Tests', 'Post type general name', 'psy-tests' ),
            'singular_name'         => _x( 'Test', 'Post type singular name', 'psy-tests' ),
            'menu_name'             => _x( 'Tests', 'Admin Menu text', 'psy-tests' ),
            'name_admin_bar'        => _x( 'Test', 'Add New on Toolbar', 'psy-tests' ),
            'add_new'               => __( 'Add New', 'psy-tests' ),
            'add_new_item'          => __( 'Add New Test', 'psy-tests' ),
            'new_item'              => __( 'New Test', 'psy-tests' ),
            'edit_item'             => __( 'Edit Test', 'psy-tests' ),
            'view_item'             => __( 'View Test', 'psy-tests' ),
            'all_items'             => __( 'All Tests', 'psy-tests' ),
            'search_items'          => __( 'Search Tests', 'psy-tests' ),
            'parent_item_colon'     => __( 'Parent Tests:', 'psy-tests' ),
            'not_found'             => __( 'No tests found.', 'psy-tests' ),
            'not_found_in_trash'    => __( 'No tests found in Trash.', 'psy-tests' ),
            'featured_image'        => _x( 'Test Thumbnail', 'Overrides the "Featured Image" phrase', 'psy-tests' ),
            'set_featured_image'    => _x( 'Set test thumbnail', 'Overrides the "Set featured image" phrase', 'psy-tests' ),
            'remove_featured_image' => _x( 'Remove test thumbnail', 'Overrides the "Remove featured image" phrase', 'psy-tests' ),
            'use_featured_image'    => _x( 'Use as test thumbnail', 'Overrides the "Use as featured image" phrase', 'psy-tests' ),
            'archives'              => _x( 'Test archives', 'The post type archive label', 'psy-tests' ),
            'insert_into_item'      => _x( 'Insert into test', 'Overrides the "Insert into post"/"Insert into page" phrase', 'psy-tests' ),
            'uploaded_to_this_item' => _x( 'Uploaded to this test', 'Overrides the "Uploaded to this post"/"Uploaded to this page" phrase', 'psy-tests' ),
            'filter_items_list'     => _x( 'Filter tests list', 'Screen reader text for the filter links', 'psy-tests' ),
            'items_list_navigation' => _x( 'Tests list navigation', 'Screen reader text for the pagination', 'psy-tests' ),
            'items_list'            => _x( 'Tests list', 'Screen reader text for the items list', 'psy-tests' ),
        );

        $args = array(
            'labels'             => $labels,
            'public'             => true,
            'publicly_queryable' => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'query_var'          => true,
            'rewrite'            => array( 'slug' => 'testas' ),
            'capability_type'    => 'post',
            'has_archive'        => true,
            'hierarchical'       => false,
            'menu_position'      => 20,
            'menu_icon'          => 'dashicons-clipboard',
            'supports'           => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ),
            'show_in_rest'       => true,
        );

        register_post_type( 'testas', $args );
    }

    public function registerAcfFields() {
        if ( ! function_exists( 'acf_add_local_field_group' ) ) {
            return;
        }

        // Build choices array from tests
        $choices = array();
        foreach ( $this->tests as $test ) {
            $choices[ $test['id'] ] = $test['title'];
        }

        $fields = array(
            array(
                'key' => 'field_psy_test_type',
                'label' => 'Test Type',
                'name' => 'psy_test_type',
                'type' => 'select',
                'instructions' => 'Select which psychological test to display on this page.',
                'required' => 1,
                'choices' => $choices,
                'default_value' => false,
                'allow_null' => 0,
                'multiple' => 0,
                'ui' => 1,
                'return_format' => 'value',
                'ajax' => 0,
            ),
            array(
                'key' => 'field_test_results_page',
                'label' => 'Test Results Page',
                'name' => 'psy_test_results_page',
                'type' => 'page_link',
                'instructions' => 'Select the page where users will be redirected to view their test results.',
                'required' => 0,
                'post_type' => array( 'page' )
            )
        );

        // If WooCommerce is installed, add product assignment field
        if ( class_exists( 'WooCommerce' ) ) {
            $fields[] = array(
                'key' => 'field_psy_test_product_id',
                'label' => 'WooCommerce Product',
                'name' => 'psy_test_product_id',
                'type' => 'post_object',
                'instructions' => 'Assign a WooCommerce product to this test.',
                'required' => 0,
                'post_type' => array( 'product' ),
                'return_format' => 'id',
                'ui' => 1,
            );
        }

        acf_add_local_field_group( array(
            'key' => 'group_psy_test_selection',
            'title' => 'Test Configuration',
            'fields' => $fields,
            'location' => array(
                array(
                    array(
                        'param' => 'post_type',
                        'operator' => '==',
                        'value' => 'testas',
                    ),
                ),
            ),
            'menu_order' => 0,
            'position' => 'normal',
            'style' => 'default',
            'label_placement' => 'top',
            'instruction_placement' => 'label',
            'hide_on_screen' => '',
            'active' => true,
            'description' => '',
        ) );
    }

    private function getTestResultByCode($code) {
        global $wpdb;

        $table_name = $wpdb->prefix . 'psy_tests';
        return $wpdb->get_row( $wpdb->prepare(
            "SELECT * FROM {$table_name} WHERE code = %s",
            $code
        ) );
    }

    private function getTestByType($test_type) {
        foreach ( $this->tests as $test ) {
            if ( $test['id'] === $test_type ) {
                return $test;
            }
        }
        return null;
    }

    public function registerTestAssets() {
        global $post;

        //register assets/style.css
        wp_enqueue_style('psy-tests-custom', plugin_dir_url(__FILE__) . 'assets/custom.css');

        if (is_page($post->ID) && isset($_GET['test_result']) ) {
            // Note: Nonce verification is not used here because test results are meant to be
            // shareable via public links. The code itself acts as the authentication token.
            $test_result_codes = sanitize_text_field( $_GET['test_result'] );
            $codes = array_map('trim', explode(',', $test_result_codes));
            
            // Validate code format (alphanumeric only, max 64 chars per code)
            $codes = array_filter($codes, function($code) {
                return !empty($code) && preg_match('/^[a-zA-Z0-9]{1,64}$/', $code);
            });
            
            if (empty($codes)) {
                return;
            }
            
            // Get the first result to determine the test class
            $result = $this->getTestResultByCode( $codes[0] );
            if ( ! $result ) {
                return;
            }

            $filtered = array_filter( $this->tests, function( $t ) use ( $result ) {
                return $t['id'] === $result->reference;
            } );
            $test_class = !empty($filtered) ? array_values($filtered)[0] : null;

            if ( ! $test_class ) {
                return;
            }

            $test_class = $test_class['class'];

            $test_class::registerTestAssets($result->test_id, true);
        }

        // Only load assets on test pages
        if ( ! is_singular( 'testas' ) || ! isset( $post->ID ) ) {
            return;
        }

        // Get the selected test type
        $test_type = get_field( 'psy_test_type', $post->ID );

        if ( ! $test_type ) {
            return;
        }

        // Find the matching test
        $target_test = $this->getTestByType( $test_type );

        if ($target_test && class_exists( $target_test['class'] ) ) {
            $test_class = $target_test['class'];
            $test_class::registerTestAssets($post->ID);
        }
    }

    public function overrideTestContent( $content ) {
        global $post;
        global $wpdb;

        $is_woocommerce_page = function() {
            if ( function_exists( 'is_woocommerce' ) && is_woocommerce() ) {
                return true;
            }
            if ( function_exists( 'is_cart' ) && is_cart() ) {
                return true;
            }
            if ( function_exists( 'is_checkout' ) && is_checkout() ) {
                return true;
            }
            return false;
        };

        if ( $is_woocommerce_page() ) {
            return $content;
        }

        if ( is_page( $post->ID) && isset( $_GET['test_result'] )) {
            // Note: Nonce verification is not used here because test results are meant to be
            // shareable via public links. The code itself acts as the authentication token.
            $test_result_codes = sanitize_text_field( $_GET['test_result'] );
            $codes = array_map('trim', explode(',', $test_result_codes));
            
            // Validate code format (alphanumeric only, max 64 chars per code)
            $codes = array_filter($codes, function($code) {
                return !empty($code) && preg_match('/^[a-zA-Z0-9]{1,64}$/', $code);
            });
            
            if (empty($codes)) {
                return $content . '<p>Invalid test result code.</p>';
            }

            $results = array();
            $product = null;

            foreach ($codes as $code) {
                $result = $this->getTestResultByCode( $code );
                if ( $result ) {
                    $results[] = $result;

                    if (!$product) {
                        $product_id = get_post_meta( $result->test_id, 'psy_test_product_id', true );
                        if ( $product_id ) {
                            $product = wc_get_product( $product_id );
                        }
                    }
                }
            }

            if ( empty($results) ) {
                return $content . '<p>Test result not found.</p>';
            }

            $filtered = array_filter( $this->tests, function( $t ) use ( $results ) {
                return $t['id'] === $results[0]->reference;
            } );
            $test_class = !empty($filtered) ? array_values($filtered)[0] : null;

            if ( ! $test_class ) {
                return $content . '<p>Test class not found.</p>';
            }

            $test_class = $test_class['class'];

            //Test product


            return $content . $test_class::renderTestResult( $results, $product );
        }

        // Only override for our custom post type
        if ( ! is_singular( 'testas' ) || $post->post_type !== 'testas' ) {
            return $content;
        }

        // Get the selected test type
        $test_type = get_field( 'psy_test_type', $post->ID );

        if ( ! $test_type ) {
            return $content;
        }

        // Find the matching test
        $target_test = $this->getTestByType( $test_type );

        if ( $target_test && class_exists( $target_test['class'] ) ) {
            $test_class = $target_test['class'];
            $content .= $test_class::renderTest( $post );
        }

        return $content;
    }
}