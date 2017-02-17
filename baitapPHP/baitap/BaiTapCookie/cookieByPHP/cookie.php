<?php
// if (isset($_COOKIE['firstcookie'])) {
//     echo "cookie is exists: " . $_COOKIE['firstcookie'];
// } else {
//     setcookie('firstcookie', 'lalalalala', time() + 3600);
//     echo "create cookie firstcookie";
// }
if (!empty($_POST['name_cookie'])) {
    $nameCookie = $_POST['name_cookie'];
    $valueCookie = $_POST['value_cookie'];
    $exprireCookie = $_POST['exprire_cookie'];
    $exprireCookie = is_numeric($exprireCookie) ? $exprireCookie : 0;

    $nameCookie = htmlentities($nameCookie);
    $valueCookie = htmlentities($valueCookie);
    $_COOKIE["$nameCookie"] = $valueCookie;
    setcookie($nameCookie, $valueCookie, time() + $exprireCookie * 60);
    echo "Cookie :" . $nameCookie . " = " . $_COOKIE["$nameCookie"];
}

var_dump($_COOKIE);
