<?php
/**
 * Hàm empty() trong php dùng để kiểm tra một biến nào đó có giá trị
 * rỗng hoặc chưa được khởi tạo hay không.
 */
// các trường hợp return true
$var = '0';
var_dump(empty($var));

$var = 0;
var_dump(empty($var));

$var = '';
var_dump(empty($var));

$var = false;
var_dump(empty($var));

$var = null;
var_dump(empty($var));

var_dump(empty($undefine));
