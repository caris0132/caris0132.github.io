<?php

require_once 'core/Autoload.php';
new core\Autoload;

$controller = new app\controllers\NewController;
$controller->index();
