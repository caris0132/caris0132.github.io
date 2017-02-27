<?php
require_once 'Controller.php';
class NewsController extends Controller
{
    public function indexAction()
    {
        echo '<pre>';
        print_r($this);
        echo '<h1>Index Action</h1>';

        echo "<h3>Token: csrf_token_name:" . $this->config->getItem('csrf_token_name') . "</h3>";

        $this->config->setItem('csrf_token_name', 'ductri');
        echo '<h3>Token: csrf_token_name (changed): ' . $this->config->getItem('csrf_token_name') . '</h3>';
        $this->config->setItem('website_name', 'losi.cms');
        echo '<h3>key website_name: ' . $this->config->getItem('website_name') . '</h3>';
    }
}
