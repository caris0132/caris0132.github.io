<?php
/**
 * array array_diff ( array $array1 , array $array2 [, array $... ] )
 * Lấy ra các giá trị của mảng gốc khác với 1 hoặc nhiều mảng so sánh khác
 * tham số:
 * - $array1: Là mảng gốc dùng để so sánh.
 * - $array2: Là mảng so sánh với mảng $array1
 */
$array1 = array(1, 2, 3, 4);
$array2 = array(1, 5, 7);
$result = array_diff($array1, $array2);
print_r($result);
//Kết quả: Array ( [1] => 2 [2] => 3 [3] => 4 )
