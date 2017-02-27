<?php

function load()
{

    $config = include_once PATH_SYSTEM . '/app/configs/init.php';
    //
    $controller = empty($_GET['c']) ? $config['default_controller'] : $_GET['c'];
    $action = empty($_GET['a']) ? $config['default_action'] : $_GET['a'];
    //
    $controller = ucfirst(strtolower($controller)) . 'Controller';

    require_once PATH_SYSTEM . '/core/Controller.php';
    //kiem tra controller
    if (!file_exists(PATH_APPLICATION . '/controllers/' . $controller . '.php')) {
        die('file not exists');
    }

    require PATH_APPLICATION . '/controllers/' . $controller . '.php';
    if (!class_exists($controller)) {
        die('class not exists');
    }

    $controllerObj = new $controller();
    $action = strtolower($action) . 'Action';
    if (!method_exists($controllerObj, $action)) {
        die('method not exists');
    }

    $controllerObj->{$action}();
}
