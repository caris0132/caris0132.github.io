<?php 
if (isset($_FILES['file'])) {
	$type = $_FILES['file']['type'];

	echo '</br>';
	echo 'Upload :	' . $_FILES['file']['name'] .'</br>';
	echo 'Type: ' . $type .'</br>';
	echo 'Size :' . round($_FILES['file']['size'] / 1024 ) . 'KB' .'</br>';
	// move file
	if (is_uploaded_file($_FILES['file']['tmp_name'])) {
		$path = 'images/'.$_FILES['file']['name'];
		move_uploaded_file($_FILES['file']['tmp_name'], $path);
		$filename = $path;
		$file = fopen($filename, 'r');
		if ($file == false) {
			echo "không thể đọc file";
		}
		$filesize = filesize($filename);
		$filecontent = fread($file, $filesize);
		if (substr($type, 0,5) == 'image')
			echo "<img src='$path' alt='images'>";
		else
			echo $filecontent;
		fclose($file);
	}
}
else
	echo "error: " ;
 ?>