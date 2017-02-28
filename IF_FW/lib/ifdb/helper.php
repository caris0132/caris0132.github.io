<?php
class Ifdb_Helper
{
    public static function getPage($page)
    {
        return ($page != null && trim($page) != '' && $page > 0 && is_numeric($page)) ? $page : 1;
    }

    public static function getCurrentUrl()
    {
        return 'http' . (empty($_SERVER['HTTPS']) ? '' : 's') . '://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
    }

    public static function convertAlias($str)
    {
        $str = strtolower(trim($str));
        $str = trim($str, '-');
        $str = preg_replace('/[^a-z0-9-]/', '-', $str);
        $str = preg_replace('/-+/', "-", $str);
        return $str;
    }
}
