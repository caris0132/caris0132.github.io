<?php

if (isset($_FILES['file'])) {
    $type = $_FILES['file']['type'];
    //info file need upload
    echo '</br>';
    echo 'Upload :	' . $_FILES['file']['name'] . '</br>';
    echo 'Type: ' . $type . '</br>';
    echo 'Size :' . round($_FILES['file']['size'] / 1024) . 'KB' . '</br>';
    // move file
    if (is_uploaded_file($_FILES['file']['tmp_name'])) {
        $path = 'images/' . $_FILES['file']['name'];
        move_uploaded_file($_FILES['file']['tmp_name'], $path);
        $filename = $path;
        $file = new splFileObject($filename);
        echo $file->fread($_FILES['file']['size']);
    }
} else {
    echo "error: ";
}
