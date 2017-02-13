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
		<input type="text" name="namefile" value="" placeholder="enter name file">
		<textarea name="file_content"></textarea>
		<div id="content-file">
			
		</div>
		<input type="submit" name="submit" value="Write file">
	</form>
</body>
<?php 
if (isset($_POST['submit'])) {
	$contentFile = $_POST['file_content'];
	$filename = $_POST['namefile'] ? $_POST['namefile'] :'' ;
	$extension = '.txt';
	$upload_dir = 'images/';
	if (!empty($contentFile) && !empty($filename)) {
		
		$filename = $upload_dir . $filename . $extension;
		$file = fopen($filename, 'w+');
		if ($file) {
			fwrite($file, $contentFile);
			echo 'ghi file thanh cong';
			echo '<br>' . 'noi dung file' . '<br>';
			echo file_get_contents($filename);
			fclose($file);
		}

	}
}
 ?>
</html>