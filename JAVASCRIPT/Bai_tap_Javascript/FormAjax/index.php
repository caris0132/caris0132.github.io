<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Trang Chu</title>
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/style_calendar.css">
	<script src="js/application.js" type="text/javascript" charset="utf-8" async defer></script>
</head>
<body onload="load_calendar()">
	<form action="login.php" method="post" accept-charset="utf-8" onsubmit="return check_validate()">
		<div id="content">
			<div id="div_username">
				<label>Username</label>
				<input type="text" name="username" id="username" value="" placeholder="Enter username">
				<p class="error" id="err_username"></p>
			</div>
			<div id="div_password">
				<label>Password</label>
				<input type="password" name="password" id="password" value="" placeholder="Enter password">
				<p class="error" id="err_password"></p>
			</div>
			<div id="div_email">
				<label>Email</label>
				<input type="email" name="email" id="email" value="" placeholder="Enter email">
				<p class="error" id="err_email"></p>
			</div>
			<div id="div_birth_day">
				
				<label>birth day</label>
				
				<div id="calendar">
					<div id="result" onclick="show_calendar()">
						<input type="text" name="day-of-birth" id="day-of-birth" value="" placeholder="">
					</div>
					<div id="content-calendar">
						<div id="feature-calendar">
							<div class="item" id="bottom" onclick="preview_year()">
							</div>
							<div class="item" id="preview" onclick="preview_month()">
							</div>
							<select name="select_month"  id="month" onchange="change_calendar()">
							</select>
							<select name="select_year"  id="year" onchange="change_calendar()">
							</select>
							<div class="item" id="next" onclick="next_month()">
								
							</div>
							<div class="item" id="top" onclick="next_year()">
								
							</div>
						</div>
						<div id="day-on-week">
							<div class="item day">
								<p>Sun</p>
							</div>
							<div class="item day">
								<p>Mon</p>
							</div>
							<div class="item day">
								<p>Tue</p>
							</div>
							<div class="item day">
								<p>Web</p>
							</div>
							<div class="item day">
								<p>Thu</p>
							</div>
							<div class="item day">
								<p>Fri</p>
							</div>
							<div class="item day">
								<p>Sat</p>
							</div>
						</div>
						<div id="day-on-month">
						</div>
					</div>
				</div>
			</div>
			<div id="feature">
				<input type="submit" name="submit" value="SUBMIT">
				<input type="button" name="refersh" value="REFERSH" onclick="check_validate()">
			</div>
		</div>
	</form>
</body>
</html>