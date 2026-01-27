<?php

// Handle test_result from POST (product page form) in addition to GET
add_filter('woocommerce_add_to_cart_validation', function ($passed, $product_id, $quantity) {
    $test_result = isset($_POST['test_result']) 
        ? sanitize_text_field($_POST['test_result']) 
        : (isset($_GET['test_result']) ? sanitize_text_field($_GET['test_result']) : null);

    if (!$test_result) {
        return $passed;
    }

    foreach (WC()->cart->get_cart() as $cart_item) {
        if (
            isset($cart_item['test_result']) &&
            $cart_item['test_result'] === $test_result
        ) {
            wc_add_notice(
                __('Šis testas jau yra jūsų krepšelyje.', 'psy-tests'),
                'error'
            );
            return false;
        }
    }

    return $passed;
}, 10, 3);

// Handle test_result from POST (product page form) in addition to GET
add_filter('woocommerce_add_cart_item_data', function ($cart_item_data, $product_id) {
    $test_result = isset($_POST['test_result']) 
        ? sanitize_text_field($_POST['test_result']) 
        : (isset($_GET['test_result']) ? sanitize_text_field($_GET['test_result']) : null);

    if ($test_result) {
        $cart_item_data['test_result'] = $test_result;
        $cart_item_data['unique_key'] = $test_result;
    }
    return $cart_item_data;
}, 10, 2);

add_filter('woocommerce_get_item_data', function ($item_data, $cart_item) {
    if (isset($cart_item['test_result'])) {
        $item_data[] = [
            'name'  => __('Testas'),
            'value' => esc_html($cart_item['test_result']),
        ];
    }
    return $item_data;
}, 10, 2);

add_action('woocommerce_checkout_create_order_line_item', function ($item, $cart_item_key, $values) {
    if (isset($values['test_result'])) {
        global $wpdb;

        $table_name = $wpdb->prefix . 'psy_tests';
        $code = $values['test_result'];
        
        $result = $wpdb->get_row( $wpdb->prepare(
            "SELECT * FROM {$table_name} WHERE `code` = %s",
            $code
        ) );

        if (!$result) {
            $item->add_meta_data('Testas', $code, true);

            return;
        }

        $result_page_id = get_post_meta($result->test_id, 'psy_test_results_page', true);

        if (!$result_page_id) {
            $item->add_meta_data('Testas', $code, true);

            return;
        }

        $test_page_url = get_permalink($result_page_id) . '?test_result=' . urlencode($code);

        $item->add_meta_data('Testas', $test_page_url, true);
    }
}, 10, 3);

// Add hidden field to product page form to preserve test_result parameter
add_action('woocommerce_before_add_to_cart_button', function () {
    if (isset($_GET['test_result'])) {
        $test_result = sanitize_text_field($_GET['test_result']);
        echo '<input type="hidden" name="test_result" value="' . esc_attr($test_result) . '">';
    }
});

// Handle test_result from POST (product page form) in addition to GET
add_filter('woocommerce_add_to_cart_validation', function ($passed, $product_id, $quantity) {
    $test_result = isset($_POST['test_result']) 
        ? sanitize_text_field($_POST['test_result']) 
        : (isset($_GET['test_result']) ? sanitize_text_field($_GET['test_result']) : null);

    if (!$test_result) {
        return $passed;
    }

    foreach (WC()->cart->get_cart() as $cart_item) {
        if (
            isset($cart_item['test_result']) &&
            $cart_item['test_result'] === $test_result
        ) {
            wc_add_notice(
                __('Šis testas jau yra jūsų krepšelyje.', 'psy-tests'),
                'error'
            );
            return false;
        }
    }

    return $passed;
}, 10, 3);

// Handle test_result from POST (product page form) in addition to GET
add_filter('woocommerce_add_cart_item_data', function ($cart_item_data, $product_id) {
    $test_result = isset($_POST['test_result']) 
        ? sanitize_text_field($_POST['test_result']) 
        : (isset($_GET['test_result']) ? sanitize_text_field($_GET['test_result']) : null);

    if ($test_result) {
        $cart_item_data['test_result'] = $test_result;
        $cart_item_data['unique_key'] = $test_result;
    }
    return $cart_item_data;
}, 10, 2);