<?php
//array_keys ( $input [, $search_value [, $strict]] );
//Trả về các key, dạng số hoặc chuỗi, từ mảng input
//$input: mảng truyền vào.
//$search_value: giá trị cần tìm kiếm
//$strict: kiểu bool - true: nếu kiểm tra giá trị có phụ thuộc vào kiểu của value hay không
$a = array("a" => "Horse", "b" => "Cat", "c" => "Dog");
print_r(array_keys($a));
//return Array ( [0] => a [1] => b [2] => c )

$a = array("a" => "Horse", "b" => "Cat", "c" => "Dog");
print_r(array_keys($a, "Dog"));
//return Array ( [0] => c )

$a = array(10, 20, 30, "10");
print_r(array_keys($a, "10", false));
//return Array ( [0] => 0 [1] => 3 )