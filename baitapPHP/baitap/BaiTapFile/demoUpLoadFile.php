<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="">
	<script language="javascript" src="http://code.jquery.com/jquery-2.0.0.min.js"></script>
	<script type="text/javascript">
	
	</script>
</head>
<body>
	<form action="" method="post" enctype="multipart/form-data">
		<input type="file" name="avartar" value="" placeholder="">
		<input type="submit" name="uploadclick" value="Upload">
	</form>
	<?php
	if (isset($_POST['uploadclick'])) {
		if ($_FILES['avartar']['error'] > 0) {
			echo 'Update không thành công';
			return;
		}
		if (is_uploaded_file($_FILES['avartar']['tmp_name']) ) {	
			var_dump($_FILES);
			if (move_uploaded_file($_FILES['avartar']['tmp_name'], 'images/' . $_FILES['avartar']['name'])) {
				echo 'upload thanh cong';
			}
		}
	}
	
	 ?>
</body>
</html>