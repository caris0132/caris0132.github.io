<?php
/**
 * array_unshift($array,$value1[,$value2,$value3...])
 * thêm một hoặc nhiều phần tử vào đầu mảng
 * tham số:
 *  - array : mảng được thêm vào
 *  - value1 : phần tử được thêm vào.
 */
$arr = array("chuoi", "cam");
array_unshift($arr, "tao", "buoi");

print_r($arr);
//return : Array ( [0] => tao [1] => buoi [2] => chuoi [3] => cam )
