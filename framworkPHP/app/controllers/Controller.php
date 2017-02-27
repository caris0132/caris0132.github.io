<?php

/**
 *
 */
class Controller
{
    protected $view;
    protected $library;
    protected $model;
    protected $helper;
    protected $config;
    public function __construct($isController = true)
    {
        require_once PATH_SYSTEM . '/core/' . 'ConfigLoader.php';
        $this->config = new ConfigLoader();
        $this->config->load('config');
        require_once PATH_SYSTEM . '/core/' . 'LibraryLoader.php';

        $this->library = new LibraryLoader();
    }
}
