<?php 
if (isset($_POST['send']) && !empty($_POST['to']) && !empty($_POST['object'])) {
	$to = $_POST['to'];
	$object = $_POST['object'];
	$message = $_POST['message'];
	
	$header = 'From: <me@example.com>';
	$sendMail = mb_send_mail($to, $object, $message,$header);
	if ($sendMail) {
		echo "gui mail thanh cong";
	}
	else {
		echo "gui mail that bai";
	}
}

 ?>
