<?php

/**
 *
 */
class LibraryLoader
{

    public function __construct()
    {
        print_r($this);
    }
    public function load($library, $agrs = array())
    {
        if (empty($this->{$library})) {
            $class = ucfirst($library) . 'Library';
            require_once PATH_SYSTEM . '/app/libs/' . $class . '.php';
            $this->{$library} = new $class($agrs);
        }
    }
}
