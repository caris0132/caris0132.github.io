<?php
//lưu ý : trong php 5 hàm list() gán giá trị cho các biến từ phải sang trái
$info                     = array('xanh', 'đỏ', 'vàng');
list($blue, $red, $yelow) = $info;
echo "$blue : $red : $yelow";
