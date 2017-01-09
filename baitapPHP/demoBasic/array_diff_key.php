<?php 
/**
 *  array array_diff_key ( array $array1 , array $array2 [, array $... ] )
 *  Lấy ra các key của mảng gốc khác với 1 hoặc nhiều mảng so sánh khác
 * tham số:
 * - $array1: Là mảng gốc dùng để so sánh.
 * - $array2: Là mảng so sánh với mảng $array1
 */
$a1=array("a"=>"red","b"=>"green","c"=>"blue");
$a2=array("a"=>"red","c"=>"blue","d"=>"pink");

$result=array_diff_key($a1,$a2);
print_r($result);
 ?>