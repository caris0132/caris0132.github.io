<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="css/style.css">
	<script src="js/javascript.js" type="text/javascript"></script>
	
</head>
<body>
	<div id="content">
		<div id="image">
		</div>
		<div id="feature">
			<input type="button" name="preview" value="preview" id="preview" onclick="change_image_by_btn_pre()">
			<div id="index">
				<?php 
					$conn = mysqli_connect("localhost","root","","slider") or die("ko ket noi dc");
					$sql = "SELECT * FROM tbl_images";
					$query = mysqli_query($conn,$sql);
					while ($row = mysqli_fetch_assoc($query)) {	

			 	?>
			 	<input type="button" name="<?php echo 'index'.$row['id'];?>" value="<?php echo $row['id']; ?>" onclick="change_image(<?php echo  ("'".$row['url']."'").",".($row['id']) ;?>)">
			 	<?php } ?>
			</div>
			<input type="button" name="next" value = "next" id="next" onclick="change_image_by_btn_next()"/>
		</div>
	</div>
	
</body>
</html>