<?php
class Ifdb_User extends Ifdb_Session
{
    public static $info;
    public static function setId($id)
    {
        self::set('Ifdb_User_id', $id);
    }

    public static function getId()
    {
        return self::get('Ifdb_User_id');
    }

    public static function setInfo($info)
    {
        self::set('Ifdb_User_info', $info);
    }

    public static function getInfo()
    {
        return self::get('Ifdb_User_info');
    }

    public static function logged()
    {
        if (self::get('Ifdb_User_id') !== null) {
            return true;
        }

        return false;
    }

    public static function logout()
    {
        self::delete('Ifdb_User_id');
        if (self::get('Ifdb_User_id') !== null) {
            return false;
        }

        return true;
    }
}
