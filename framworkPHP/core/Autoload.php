<?php

namespace core;

/**
 *
 */
class Autoload
{

    public function __construct()
    {
        spl_autoload_register(array($this, '_autoload'));
    }
    private function _autoload($file)
    {
        $file = str_replace("\\", '/', trim($file, '\\')) . '.php';
        if (file_exists($file)) {
            require_once $file;
        }
    }
}
