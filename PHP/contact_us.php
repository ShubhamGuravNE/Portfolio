<?php
// Using the ini_set()
ini_set("SMTP", "smtpout.asia.sescureserver.net");
ini_set("sendmail_from", "hr@ecti.co.in");
ini_set("smtp_port", "80");
?>
<html>
<head>
	<title>Contact Us</title>
		<!-- Bootstrap  -->
	<link rel="stylesheet" href="css/bootstrap.css"/>
	<style type="text/css">
		.error{
			color: red;
		}
	</style>
</head>

<body>
	
<div class="col-sm-6" id="frmdiv">
	<div id="succmsg" class="col-sm-12" style="display: none;"></div>
	<form name="frm_contact_us" id="frm_contact_us" method="post" action="">
	
		<div class="text-danger"><b>All fields are mandatory</b></div>
		<div class="form-group">
			<label for="txtname">Name</label>
			<input type="text" name="txtname" id="txtname" class="form-control" />
		</div>
		<div class="form-group">
			<label for="txtphone">Contact No.</label>
			<input type="text" name="txtphone" id="txtphone" class="form-control" />
		</div>
		<div class="form-group">
			<label for="txtemail">EmailID</label>
			<input type="email" name="txtemail" id="txtemail" class="form-control" pattern="" />
		</div>
		<div class="form-group">
			<label for="txtmsg">Message</label>
			<textarea class="form-control" name="txtmsg" id="ta_msg" placeholder="Type your msg here"></textarea>
		</div>
		<div class="form-group">
			<button type="submit" name="submit" class="btn btn-primary">Send Message</button>
		</div>
	
	</form>
</div>
<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="js/jquery.validate.js"></script>
<script type="text/javascript" src="js/contact_us.js"></script>
</body>
</html>