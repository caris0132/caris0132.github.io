<?php

/**
 *
 */
class Ifdb_Controller
{
    public $view;
    public function __construct()
    {
        $this->view = new Ifdb_View;
        $session = new Session_MySession();
        $log = new Log_Logfile();
        if (Ifdb::$config['logfile_status'] == 'enable') {
            $path = Ifdb::$config['basePath'] . '/' . Ifdb::$config['logfile_dir'] . '/' . Ifdb::$config['logfile'];
            Log_Logfile::lfile($path);
            Log::lfile($path);
        }

    }
    public function redirect($url)
    {
        header('location:' . $url);
    }
}
