<?php 
/**
 * array array_intersect_key ( array $array1 , array $array2 [, array $... ])
 * trả về một mảng chứa tất cả các phần tử ở array1 có các key hiện diện trong các mảng đối số còn lại
 * tham số:
 * - array1: mảng gốc với các key cần được kiểm tra
 * - array2: Một mảng để so sánh các key .
 */
$array1 = array('blue'  => 1, 'red'  => 2, 'green'  => 3, 'purple' => 4);
$array2 = array('green' => 5, 'blue' => 2, 'yellow' => 7, 'cyan'   => 8);

var_dump(array_intersect_key($array1, $array2));
//result: array(2) { ["blue"]=> int(1) ["green"]=> int(3) }
 ?>