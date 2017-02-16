<?php

$path = 'images/dulieu.txt';
if (is_file($path)) {
    $filename = basename($path);
    //config content type for dowload file
    header('Content-Description: File Transfer');
    header("content-Type: application/octet-stream");
    header('Content-Length: ' . filesize($path));
    header('Content-Disposition: attachment; filename="' . $filename . '"');
    $file = fopen($path, 'rb');
    echo $filename;
    echo fread($file, filesize($path));
    fclose($file);
    exit();
}
