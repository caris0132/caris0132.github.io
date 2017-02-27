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
        $this->view->render('index');
    }
    public function about()
    {
        $this->view->render('about');
    }
}
