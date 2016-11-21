<?php 
	function check_username()
	{
		if(isset($_POST['username']) && $_POST['username'] =="admin") {
		return 'false';
		}
		else {
			return 'true';
		}
	}
	echo check_username();
	
 ?>