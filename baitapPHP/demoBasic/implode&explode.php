<?php
$var = "1 3 2 4 a b h c c 5";
/**
 * [.explode(delimiter, string) tách một chuổi thành một mảng với ký tự cách chuổi là $delimiter]
 * @param  delimiter ký tự cắt chuổi
 * @param  string    chuổi muốn cắt.
 * @return array     mảng các phần tử của chuổi muốn cắt.
 */
$arr = explode(' ', $var);
print_r($arr);
/**
 * implode($delimiter, $piecesarray):Hàm này ngược với hàm explode,
 * nó chuyển một mảng $piecesarray thành chuỗi và mỗi phần tử cách nhau bởi chuỗi $delimiter
 */
//ví dụ
$str = implode(' ', $arr);
echo '<br>' . ($str);
