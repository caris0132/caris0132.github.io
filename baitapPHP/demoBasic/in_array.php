<?php
/**
 * in_array ( $value,  $array [,$strict ] );
 * Hàm in_array() tìm kiếm một value cụ thể trong một mảng.
 * Nếu tham số thứ ba strict được thiết lập là TRUE, thì hàm in_array() cũng sẽ kiểm tra kiểu của $value.
 * các tham số:
 * -value: Bắt buộc. Value sẽ được tìm kiếm trong mảng.
 * -array:     Bắt buộc. một mảng xác định để tìm kiếm.
 * -strict: Tùy ý. Nếu tham số này được thiết lập, hàm in_array() tìm kiếm kiểu cụ thể trong mảng
 */
$os = array("Mac", "NT", "Window", "Linux","100");

if (in_array("Window", $os)) {
    echo "Tìm thấy giá trị Window";
}

if (in_array(100, $os)) {
    echo "Tìm thấy giá trị 100";
}
