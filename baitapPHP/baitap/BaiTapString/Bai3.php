<?php
/**
 * check string Multibyte
 * @param  String  $string String being check for multibyte
 * @return boolean         true if string is multipyte . return false if string is single byte;
 */
function isMultiByte($string)
{
    return mb_strlen($string, 'utf-8') < strlen($string);
}
$singlebyte = 'ngay hom qua';
$multibyte  = 'ngày hôm qua';
echo "kiểm tra chuổi '$singlebyte'";
echo '<br>';
var_dump(isMultiByte($singlebyte));
echo '<br>';
echo "kiểm tra chuổi '$multibyte'";
var_dump(isMultiByte($multibyte));
