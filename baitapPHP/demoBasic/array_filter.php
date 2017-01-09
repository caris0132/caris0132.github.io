<?php
/**
 * array array_filter ( array $input [, callback $callback] );
 * Duyệt qua mỗi value trong mảng input đang truyền tới hàm callback. Nếu hàm callback trả về true,
 * thì value hiện tại của mảng input được trả về trong mảng kết quả. Key của mảng được giữ nguyên.
 * Tham số:
 *  - input: mảng đầu vào.
 *  - callback: Hàm callback để sử dụng để sử lý phần tử trong mảng input
 */
function odd($var)
{
    return ($var % 2 == 0);
}

function even($var)
{
    return ($var % 2 != 0);
}

$array1 = array("a" => 1, "b" => 2, "c" => 3, "d" => 4, "e" => 5);
$array2 = array(6, 7, 8, 9, 10, 11, 12);

echo "Mảng lẻ: ";
print_r(array_filter($array1, "odd"));

echo "<br>Mảng chẵn: ";
print_r(array_filter($array2, "even"));
