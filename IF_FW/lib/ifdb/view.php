<?php

/**
 *
 */
class Ifdb_View
{
    private $title;
    private $image;
    private $keywords;
    private $description;
    private $published;
    private $modified;
    private $layout;
    private $placeholder;
    private $breadcrumb;
    public $smarty;

    public function __construct()
    {
        // $this->smarty = new Smarty_MySmarty();
        // $this->smarty->template_dir = Ifdb::$config['basePath'] . '/app/' . Ifdb::$module . '/view/index';
        // $this->smarty->compile_dir = Ifdb::$config['basePath'] . '/app/default/view/';
        $this->setLayout(Ifdb::$config['defaultTemplate']);
        $this->setTitle(isset(Ifdb::$config['name']) ? Ifdb::$config['name'] : '');
    }
    public function render($name)
    {
        $this->placeholder = $name;
        require 'app/' . strtolower(Ifdb::$module) . '/view/layout/' . $this->layout . '.php';
    }
    public function renderPartial($name)
    {
        $name = explode('/', $name);
        if (count($name) == 1) {
            $name = strtolower(Ifdb::$controller) . '/' . $name;
        }
        require 'app/' . strtolower(Ifdb::$controller) . '/view/' . $name . '.php';
    }
    public function placeholder()
    {
        $placeholder = explode('/', $this->placeholder);
        if (count($placeholder) == 1) {
            $this->placeholder = strtolower(Ifdb::$controller) . '/' . $this->placeholder;
        }
        require 'app/' . strtolower(Ifdb::$module) . '/view/' . $this->placeholder . '.php';
    }
    public function setBreadcrumb($breadcrumb)
    {
        $this->breadcrumb = $breadcrumb;
    }
    public function getBreadcrumb()
    {
        return $this->breadcrumb;
    }
    public function setLayout($layout)
    {
        $this->layout = $layout;
    }
    public function getLayout()
    {
        return $this->layout;
    }
    public function setKeywords($keywords)
    {
        $this->keywords = $keywords;
    }
    public function getKeywords()
    {
        return $this->keywords;
    }
    public function setDescription($description)
    {
        $this->description = $description;
    }
    public function getDescription()
    {
        return $this->description;
    }
    public function setPublished($published)
    {
        $this->published = $published;
    }
    public function setModilied($modified)
    {
        $this->modified = $modified;
    }
    public function setTitle($title)
    {
        $this->title = $title;
    }
    public function getTitle()
    {
        return $this->title;
    }
}
