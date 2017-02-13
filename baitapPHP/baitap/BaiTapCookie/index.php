<?php 
if (isset($_COOKIE['firstcookie'])) {
	echo "cookie is exists: " . $_COOKIE['firstcookie'];
}
else {
	setcookie('firstcookie', 'lalalalala', time() +  3600);
	echo "create cookie firstcookie";
}
 ?>