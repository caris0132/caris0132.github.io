<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="">
</head>
<body>
	<?php
		if (isset($_POST['submit'])){
                    echo "<p>".'Tên đăng nhập là: ' . $_POST['name']."</p>";
                }
	?>
	<form action="" method="post" accept-charset="utf-8">
		<input type="text" name="name" value="" placeholder="Nhap">
		
		<input type="submit" name="submit" value="submit">

	</form>
</body>
</html>

