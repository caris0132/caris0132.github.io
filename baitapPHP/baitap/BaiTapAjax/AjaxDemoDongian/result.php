<?php

if (isset($_POST['data'])) {
    echo ' Data request:' . $_REQUEST['data'];
} else {
    echo 'chưa nhập trường data';
}
