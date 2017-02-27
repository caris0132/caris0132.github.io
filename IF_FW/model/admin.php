<?php
/**
 *
 */
class Admin extends Ifdb_Model
{

    public function __construct($scenario = null)
    {
        $this->scenario = $scenario;
        parent::__construct('Admin');

    }
    public function isAdmin($username, $password)
    {

    }
}
