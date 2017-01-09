<?php
/**
 * array_walk ( $array, callback $callback );
 * Hàm này áp dụng một hàm do người dùng tạo tới mỗi phần tử của một mảng.
 * Tham số:
 * - array: mảng đầu vào.
 * - callback: hàm sử lý khi duyệt qua mỗi phần tử.
 */
function call_back_function($value, $key)
{
    echo "Key $key có giá trị $value <br>";
}
$array = array("a" => "green", "b" => "brown", "c" => "blue", "red");

array_walk($array, "call_back_function");