<?php

return array(
    //đường dẫn vật lý đến thư mục gốc
    'basePath' => dirname(__FILE__) . DIRECTORY_SEPARATOR . '..',
    'ds' => DIRECTORY_SEPARATOR,
    // thư mục chứa các file dùng chung cho toàn bộ wf.
    'resourceFolder' => 'public',
    //name of project
    'name' => 'IF - FrameWork tu tui',
    //langguege of project
    'sourceLangugae' => 'vi',
    'language' => 'vi',
    // default module.
    'defaultModule' => 'default',
    'defaultAction' => 'index',
    'defaultController' => 'index',
    'defaultTemplate' => 'default',

    //config data base .
    'db' => array(
        'connectionString' => 'mysql:host=localhost;dbname=dbframework',
        'emulatePrepare' => true,
        'username' => 'root',
        'password' => '',
        'charset' => 'utf8',
    ),
    'routers' => array(
        'tin-tuc' => 'news',
    ),
    // limit record earch page
    'recordPerPage' => 20,

    /**
     * config log file
     */
    //log file status . if status = enable . then using Logfile
    'logfile_status' => 'enable',

    //base path + logfile_dir
    'logfile_dir' => 'lib/log',
    //name log file.
    'logfile' => 'logfile.txt',

);
