<?php
/**
 *
 */
class Default_Controller_Base extends Ifdb_Controller
{
    public function init()
    {
        Ifdb_Session::start();
    }
}
