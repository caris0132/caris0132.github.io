<?php
if (isset($_POST['uploadclick'])) {
    if ($_FILES['avartar']['error'] > 0) {
        echo 'Update không thành công';
        return;
    }
    if (is_uploaded_file($_FILES['avartar']['tmp_name'])) {
        var_dump($_FILES);
        if (move_uploaded_file($_FILES['avartar']['tmp_name'], 'images/' . $_FILES['avartar']['name'])) {
            echo 'upload thanh cong';
        }
    }
}
