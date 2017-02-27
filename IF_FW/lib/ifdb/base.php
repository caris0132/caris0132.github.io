<?php

/**
 *
 */
class IfdbBase
{
    public static $module;
    public static $controller;
    public static $action;
    public static $param;
    public static $config;
    public static $baseUrl;
    public static $resourceUrl;
    public function __construct($_config)
    {
        IfdbBase::$config = $_config;
        IfdbBase::$baseUrl = $this->getBaseUrl();
        IfdbBase::$resourceUrl = IfdbBase::$baseUrl . '/' . IfdbBase::$config['resourceFolder'];
        spl_autoload_register('self::autoload');
    }
    private function getBaseUrl()
    {
        $currentPath = $_SERVER['PHP_SELF'];
        $pathInfo = pathinfo($currentPath);
        $hostName = $_SERVER['HTTP_HOST'];
        $protocol = strtolower(substr($_SERVER['SERVER_PROTOCOL'], 0, 5)) == 'https://' ? 'https//' : 'http//';
        return $protocol . $hostName . ($pathInfo['dirname'] != '/' ? $pathInfo['dirname'] : '');
    }
    public function autoload($class)
    {
        $file = strtolower(str_replace('_', IfdbBase::$config['ds'], $class) . '.php');

        //include file
        if (file_exists('app' . IfdbBase::$config['ds'] . $file)) {
            include 'app' . IfdbBase::$config['ds'] . $file;
        } elseif (file_exists('lib' . IfdbBase::$config['ds'] . $file)) {
            include_once 'lib' . IfdbBase::$config['ds'] . $file;
        } elseif (file_exists('model' . IfdbBase::$config['ds'] . $file)) {
            include_once 'model' . IfdbBase::$config['ds'] . $file;
        } elseif (file_exists($file)) {
            require_once $file;
        } else {
        }
    }
    public function run()
    {
        $module = IfdbBase::$config['defaultModule'];
        $controller = IfdbBase::$config['defaultController'];
        $action = IfdbBase::$config['defaultAction'];
        $param = array();
        if (isset($_GET['router'])) {
            $routers = strtolower(rtrim($_GET['router'], '/\\'));
            unset($_GET['router']);
            foreach (IfdbBase::$config['routers'] as $key => $value) {
                $key = str_replace('/', '\/', $key);
                if (preg_match('/^' . $key . '/', $routers, $match)) {
                    $routers = str_replace($match[0], $value, $routers);
                    break;
                }
            }
            $routers = explode('/', $routers);
            if ($routers[0] != '' && is_dir('app' . IfdbBase::$config['ds'] . str_replace('-', '', $routers[0]))) {
                $module = str_replace('-', '', $routers[0]);
                array_shift($routers);
            }
            if (isset($routers[0])) {
                $filepath = 'app' . IfdbBase::$config['ds'] . strtolower($module) . IfdbBase::$config['ds'] . 'controller' . IfdbBase::$config['ds'] . str_replace('-', '', $routers[0]) . '.php';
                if (file_exists($filepath)) {
                    $controller = str_replace('-', '', $routers[0]);
                    array_shift($routers);
                }
            }
            if (isset($routers[0])) {
                $class = ucfirst($module) . '_Controller_' . ucfirst($controller);
                if (method_exists($class, str_replace('-', '', $routers[0])) || $routers[0] == 'error') {
                    $action = str_replace('-', '', $routers[0]);
                    array_shift($routers);
                }
            }
            if (isset($routers[0])) {
                $param = $routers;
            }

        }
        IfdbBase::$module = $module;
        IfdbBase::$controller = $controller;
        IfdbBase::$action = $action;
        IfdbBase::$param = $param;
        if ($module != IfdbBase::$config['defaultModule']) {
            IfdbBase::$baseUrl .= '/' . $module;
        }
        $class = ucfirst($module) . '_Controller_' . ucfirst($controller);
        $controller = new $class();
        if (method_exists($controller, 'init')) {
            $controller->init();
        }
        $controller->$action($param);
    }
    public static function app($_config)
    {
        return new self($_config);
    }
}
