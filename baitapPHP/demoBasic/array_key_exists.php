<?php
/**
 * bool array_key_exists ( $key, $array );
 * Trả về TRUE nếu key đã cho đã có trong mảng array.
 * Key có thể là bất kỳ giá trị nào có thể có cho chỉ mục mảng.
 * tham số :
 * - key: Bắt buộc. Key được tìm kiếm.
 * - array: Bắt buộc. Mảng muốn tìm kiếm
 */
$search_array = array('one' => 1, 'two' => 4, 3);

if (array_key_exists('one', $search_array)) {
    echo "Phần tử 'one' là có trong mảng";
}
