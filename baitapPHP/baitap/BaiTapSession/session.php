<?php

require 'session.class.php';
$session = new session();
$session->session_start('_s', false);
if (isset($_POST['save']) && !empty($_POST['name'])) {
    $_SESSION['name'] = $_POST['name'];
}

?>
 <!DOCTYPE html>
 <html>
 <head>
 	<meta charset="utf-8">
 	<meta http-equiv="X-UA-Compatible" content="IE=edge">
 	<title></title>
 	<link rel="stylesheet" href="">
 </head>
 <body>
 	<form action="" method="post" accept-charset="utf-8">
<?php

if (isset($_SESSION['name'])) {
    echo 'Session: ' . $_SESSION['name'];
    unset($_SESSION['name']);
}
?>
 		<input type="text" name="name" value="" placeholder="enter username">
 		<input type="submit" name="save" value="save">
 	</form>
 </body>
 </html>