<?php
/**
 * array array_merge_recursive ( array $array1 [, array $array2 [, array $array3...]] );
 * Sáp nhập các phần tử của một hoặc nhiều mảng với nhau
 * để mà các value của mảng này được phụ thêm vào cuối mảng kia.
 * Tham số:
 * - array1: mảng được thêm vào.
 * - array1..n: các mảng thêm vào.
 * Lưu ý: Nếu các mảng đầu vào có cùng các key ở dạng chuỗi,
 * thì value sau của key đó sẽ là một mảng index chứa các giá trị của key đó trong tất cả các đối số.
 */
$array1 = array("a" => "Horse", "b" => "Cat", "c" => "Dog");
$array2 = array("d" => "Cow", "a" => "Cat", "e" => "elephant");
$array3 = array('a' => "c ho", "c" => "tiger");

print_r(array_merge($array1, $array2, $array3));
echo "<br>";
/**
 * array + array
 * trả về một mảng mới chứa tất cả các phần tử của 2 mảng
 * trong trường hợp phần tử bị trùng key thì key sẽ có giá trị của key ở mảng đầu tiên.
 */
print_r($array1 + $array2);
