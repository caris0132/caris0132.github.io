<?php
/**
 *
 */
class Admin_Controller_Index extends Admin_Controller_Base
{

    public function __construct()
    {
        parent::__construct();
        $this->view->smarty = new Smarty_MySmarty();
        $this->view->smarty->template_dir = Ifdb::$config['basePath'] . '/app/' . Ifdb::$module . '/view/' . Ifdb::$controller;
        $this->view->smarty->compile_dir = Ifdb::$config['basePath'] . '/app/' . Ifdb::$module . '/view/template_c';
    }
    public function index()
    {

        $this->view->error = '';
        if (null != Ifdb_Request::post('User')) {
            $user = new Users('login');
            $user->load(Ifdb_Request::post('User'));
            if ($user->login()) {
                $this->redirect(Ifdb::$baseUrl);
            } else {
                $this->view->error = 'Wrong username or password.';
            }
        }
        $this->view->smarty->assign('data', $this->view->error);
        $this->view->render('index');
    }
    public function about()
    {
        $this->view->render('about');
    }
    public function login()
    {
        $this->view->error = '';
        if (null != Ifdb_Request::post('User')) {
            $user = new Users('login');
            $user->load(Ifdb_Request::post('User'));
            if ($user->validate() && $user->login()) {
                $a = Ifdb::$baseUrl;
                $this->redirect(Ifdb::$baseUrl);
            } else {
                $this->view->error = 'Wrong username or password.';
            }
        }
        $this->view->smarty->assign('data', null);
        $this->view->render('login');
    }
}
