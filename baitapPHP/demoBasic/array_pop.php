<?php
/**
 * array_pop ( $array );
 * loại bỏ một phần tử ở cuối mảng trả về phần tử được loại bỏ.
 * tham số.
 * - array: mảng muốn loại bỏ phần tử cuối.
 * lưu ý: Nếu mảng là trống (hoặc không là phải một mảng), trả về NULL.
 */
$arr = array("a" => "cam", "b" => "chuoi", "c" => "tao");
$val = array();

var_dump(array_pop($arr));
echo "<br>";
var_dump(array_pop($val));
