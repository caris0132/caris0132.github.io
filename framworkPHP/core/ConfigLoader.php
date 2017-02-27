<?php

/**
 *
 */
class ConfigLoader
{

    public function __construct()
    {
    }
    public function Load($config)
    {
        if (file_exists(PATH_APPLICATION . '/configs/' . $config . '.php')) {
            $config = include_once PATH_APPLICATION . '/configs/' . $config . '.php';
            if (!empty($config)) {
                foreach ($config as $key => $value) {
                    $this->config[$key] = $value;
                }
            }
            return true;
        }
        return false;
    }
    public function getItem($key, $defaultVal = '')
    {
        return isset($this->config[$key]) ? $this->config[$key] : $defaultVal;
    }

    public function setItem($key, $value)
    {
        $this->config[$key] = $value;
    }
}
