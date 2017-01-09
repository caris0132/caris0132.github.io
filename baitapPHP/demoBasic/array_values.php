<?php
/**
 * array_values ( $array );
 * Hàm này trả về tất cả value từ mảng array và các chỉ mục giá trị số của mảng.
 * Chuyển một mảng kết hợp sang mảng trị số
 * tham số :$array - Bắt buộc. Xác định một mảng
 */
$array = array("a" => "green", "b" => "brown", "c" => "blue", "red");
print_r(array_values($array));
// trả về một mảng trị số :Array ( [0] => green [1] => brown [2] => blue [3] => red )
