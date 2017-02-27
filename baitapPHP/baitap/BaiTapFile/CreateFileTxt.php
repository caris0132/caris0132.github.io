<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
</head>

<body>
	<form action="" method="post" accept-charset="utf-8">
		<input type="text" name="namefile" value="" placeholder="enter name file">
		<textarea name="file_content" placeholder="enter content file"></textarea>
		<input type="submit" name="submit" value="Write file">
        <button type="button"><a href="images" >Folder</a></button>
	</form>
</body>
<?php

if (isset($_POST['submit'])) {
	$contentFile = $_POST['file_content'];

	$filename = $_POST['namefile'] ? $_POST['namefile'] : '';
	$extension = '.txt';
	$upload_dir = 'images/';
	if (!empty($contentFile) && !empty($filename)) {

		$filename = $upload_dir . $filename . $extension;
		$file = fopen($filename, 'w+');
		if ($file) {
			fwrite($file, $contentFile);
			echo 'ghi file thanh cong';
			echo '<br>' . 'noi dung file' . '<br>';
			echo rawurlencode(file_get_contents($filename));
			fclose($file);
		}

	}
}
?>
<script>
    $(':text').keypress(function (evt) {
        var regex = new RegExp("^[a-zA-Z0-9]+$");
        var key = String.fromCharCode(!evt.charCode ? evt.width : evt.charCode);
        if (!regex.test(key)) {
            return false

        }
        return true;
    })
</script>
</html>