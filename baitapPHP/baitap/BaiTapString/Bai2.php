<?php
/**
 * Tìm chuổi con trong chuổi cha cho trước
 * @param  string $string    chuổi cha
 * @param  string $subString chuổi con
 * @return boolean            trả về true nếu chuổi con có chứa trong chuổi cha ngược lại retun false
 */
function findString($string, $subString)
{
    return strpos($string, $subString)? true : false;
}
////////
//run //
////////
echo 'tìm kiếm chuổi \'tết\' trong chuổi \'Xắp đến tết rồi\' ';
echo "</br>";
var_dump(findString('Xắp đến tết rồi', 'tết'));
