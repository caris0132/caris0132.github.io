<?php
/**
 *
 */
require_once 'session.class.php';
class Session_MySession extends SysSession
{
    private $db;
    public function __construct()
    {
        parent::__construct();
        $this->db = new Ifdb_Database();
    }
    public function open($savePath, $sessionName)
    {
        $link = mysqli_connect($_SERVER['SERVER_NAME'],
            Ifdb::$config['db']['username'],
            Ifdb::$config['db']['password'],
            Ifdb::$config['db']['session_db']);
        if ($link) {
            $this->link = $link;
            //$this->*SysSession*link = $link;
            return true;
        } else {
            return false;
        }
    }

}
$handler = new Session_MySession();
session_set_save_handler($handler, true);
