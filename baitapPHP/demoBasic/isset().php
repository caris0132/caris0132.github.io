<?php
/**
 * Hàm isset() được dùng để kiểm tra một biến nào đó đã được khởi tạo
 * trong bộ nhớ của máy tính hay chưa, nếu nó đã khởi tạo (tồn tại)
 * thì sẽ trả về TRUE và ngược lại sẽ trả về FALSE.
 * lưu ý : nếu biến được khởi tạo có giá trị null return false
 */
var_dump(isset($a));
//return false because $a is set
$b = null;
var_dump(isset($b));
//return false because $b is null
$c = 0;
var_dump(isset($c));
//return true;
