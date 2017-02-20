<?php

function checkUsername() {
	if (isset($_POST['username']) && $_POST['username'] == "admin123456") {
		return 'false';
	} else {
		return 'true';
	}
}
echo checkUsername();
?>