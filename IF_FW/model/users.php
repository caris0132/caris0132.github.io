<?php
class Users extends Ifdb_Model
{
    public function __construct($scenario = null)
    {
        $this->scenario = $scenario;
        parent::__construct('users');
    }

    public function login()
    {
        if (isset($this->username) && isset($this->password)) {
            $model = $this->find('username = :username and status <> 0 and status is not null', array(':username' => $this->username));
            if ($model && isset($model->username) && $model->password == $this->password) {
                Ifdb_User::setId($model->id);
                Ifdb_User::setInfo($model);
                return true;
            }
        }
        return false;
    }
    public function maps()
    {
        return array(
            'id' => array('id'),
            'username' => array('username'),
            'password' => array('password'),
            'roles' => array('roles'),
            'fullname' => array('fullname'),
            'status' => array('status'),
            'inserted' => array('inserted'),
            'updated' => array('updated'),
            'inserter' => array('inserter'),
            'updater' => array('updater'),
        );
    }
}
