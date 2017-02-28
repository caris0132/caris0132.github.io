<?php
/**
 *
 */
class Admin_Controller_Base extends Ifdb_Controller
{
    public $allowAccessAction = array();
    public function __construct()
    {
        parent::__construct();
    }
    //để chạy các chức năng thư viện như log smarty, session_DB... dùng cho module.
    public function init()
    {
        Ifdb_Session::start();
    }

    private function setGlobal()
    {
        $this->defaultRecordPerPage = 10;
    }

    private function authentication()
    {
        if (in_array(Ifdb::$action, $this->allowAccessAction)) {
            return true;
        }
        if (Ifdb_User::logged()) {
            if ($this->authorization()) {
                return true;
            } else {
                $this->redirect(Ifdb::$baseUrl . '/../');
            }
        } else {
            $this->redirect(Ifdb::$baseUrl . '/login');
            return false;
        }
    }

    private function authorization()
    {
        $user = Users::model()->find('id = :id', array(':id' => Ifdb_User::getId()));
        if ($user != false && $user->id != '') {
            if ($user->roles == 1) {
                return true;
            }
        }
        return false;
    }
}
