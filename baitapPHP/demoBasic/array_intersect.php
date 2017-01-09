<?php
/**
 * array array_intersect ( array $array1, array $array2 [, array $array3 ...] );
 * Trả về một mảng chứa tất cả giá trị của mảng array1 mà có mặt trong tất cả array còn lại. -
 * tham số:
 * - array1: mảng gốc để so sánh với các mảng khác.
 * - array2: mảng được so sánh.
 */
$array1 = array("a" => "green", "red", "blue");
$array2 = array("b" => "green", "yellow", "red");
$result = array_intersect($array1, $array2);
//result: Array ( [a] => green [0] => red )
print_r($result);
