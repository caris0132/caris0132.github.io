<?php
/**
 *
 */
class Default_Controller_Index extends Default_Controller_Base
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
        $model = new News;
        $param = array(
            'title' => "ello",
        );
        //$this->view->models = $model->findAll('news');
        $this->view->smarty->assign('data', 'hello world');
        $this->view->render('index');

    }

    public function error($param = null)
    {
        # code...
    }
    public function about()
    {
        $model = new News;
        $param = array(
            'title' => "ello",
        );
        $this->view->models = $model->findAll('news');
        $this->view->smarty->assign('data', $this->view->models);
        $this->view->render('about');
    }
    public function contact()
    {
        echo "this is conact page!";
    }
}
