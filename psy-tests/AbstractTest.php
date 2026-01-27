<?php

abstract class AbstractTestClass {
    abstract public static function registerHooks();

    abstract public static function registerTestAssets($test_page_id, $results = false);

    abstract public static function renderTest($post = null);

    abstract public static function renderTestResult($test_result);
}