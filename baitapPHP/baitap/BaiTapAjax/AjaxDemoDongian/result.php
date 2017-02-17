<?php

if (!empty($_POST['data'])) {
	$data = $_POST['data'];
	$data = htmlentities($data);
	echo 'response: ' . $data;
} else {
	echo 'chưa nhập trường data';
}
