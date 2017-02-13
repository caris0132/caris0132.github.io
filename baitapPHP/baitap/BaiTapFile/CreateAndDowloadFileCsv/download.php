<?php 
if (isset($_POST['submit'])) {
	$contentFile = $_POST['file_content'];
	$filename = $_POST['namefile'] ? $_POST['namefile'] :'' ;
	$extension = '.csv';
	$upload_dir = 'images/';
	$tmp_dir = 'tmp/';
	if (!empty($contentFile) && !empty($filename)) {
		
		$filename = $upload_dir . $filename . $extension;
		$file = fopen($filename, 'w+');
		if ($file) {
			fwrite($file, $contentFile);
			fclose($file);
			$file = fopen($filename, 'rb');
			header('Content-Type : application/octet-stream');
			header("Content-disposition : attachment ; filename='" . basename($filename) ."'");
			header('Content-Length:'.filesize($filename));
			echo file_get_contents($filename);
			fclose($file);
		}
		else {
			echo 'ghi file that bai';
		}

	}
}
 ?>