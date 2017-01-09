<?php
/**
 * array_shift ( $array );
 * Bỏ đi phần tử đầu tiên trong mảng và trả về phần tử đó.
 * tham số:
 * - array: mảng muốn loại bỏ đi phần tử đầu tiên.
 * Lưu ý: nếu mảng là trống (hoặc không là một mảng), thì sẽ trả về NULL.
 */
$array = array("a" => "banana", "b" => "apple", "c" => "orange");

print_r(array_shift($array));
//return banana
echo "<br>";
print_r(array_shift($array));
//return apple
