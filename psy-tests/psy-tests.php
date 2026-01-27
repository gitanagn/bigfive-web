<?php

if (!defined("ABSPATH")) {
    exit;
}

/*
 * Plugin Name: Psychology Tests
 * 
*/

define( 'PSYTESTS_PATH', untrailingslashit( plugin_dir_path( __FILE__ ) ) );
define( 'PSYTESTS_URL', untrailingslashit( plugin_dir_url( __FILE__ ) ) );
define( 'PSYTESTS_VERSION', '1.0.7' );

require PSYTESTS_PATH . '/tests/BigFive.php';
require PSYTESTS_PATH . '/PsyTests.php';

$psytests = new PsyTests([
    ['id' => BigFiveTest::$id, 'title' => BigFiveTest::$title, 'class' => BigFiveTest::class]
]);

register_activation_hook( __FILE__, [$psytests, 'activate'] );
register_deactivation_hook(__FILE__, [$psytests, 'deactivate']);

//Woocommerce integration
require PSYTESTS_PATH . '/integrations/woocommerce.php';