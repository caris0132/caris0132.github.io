<?php

/**
 *
 */

require_once 'Controller.php';
class LibraryController extends Controller
{

    public function indexAction()
    {
        echo "upload library";

        $this->library->load('upload');
        $this->library->upload->upload();
    }
}
