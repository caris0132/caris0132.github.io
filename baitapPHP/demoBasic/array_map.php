<?php
/**
 * array array_map ( callback $callback, array $array1 [, array $array2...] );
 * Trả về một mảng chứa tất cả phần tử của mảng array1 sau khi đã áp dụng hàm callback tới mỗi phần tử đó.
 * Số tham số mà hàm callback chấp nhận nên so khớp với số mảng đã truyền cho hàm array_map() trong PHP.
 * tham  số:
 * - callbackL hàm sữ lý.
 * - array1,...n: mảng input truyền vào.(có ít nhất 1 mảng truyền vào)
 */
function call_back_func($v1, $v2)
{
    if ($v1 === $v2) {
        return "bằng nhau";
    }
    return "Khác nhau";
}
function sqr($n)
{
    return ($n * $n);
}

$a = array(1, 2, 3, 4, 5);
$b = array_map("sqr", $a);

print_r($b);

$array1 = array(1, 2, 3, 4);
$array2 = array(10, 2, 30, 4);
$b      = array_map("call_back_func", $array1, $array2);

print_r($b);
