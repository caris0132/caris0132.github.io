<?php
define('PATH_SYSTEM', __DIR__);
define('PATH_APPLICATION', __DIR__ . '/app');

// Lấy thông số cấu hình
require PATH_SYSTEM . '/app/configs/init.php';
include_once PATH_SYSTEM . '/core/Common.php';
require_once 'core/Autoload.php';
new core\Autoload;
new core\Controller;

load();
