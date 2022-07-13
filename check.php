<?php




  $phone = $_POST['phone'];

  $name =  $_POST['name'];

  $email =  $_POST['email'];

  $teacher =  $_POST['teacher'];
  if(empty($teacher))
  {
    $teacher = "NONE";
  }
  $mysql = new mysqli('localhost','root','root','students');

	$mysql->query("INSERT INTO `users` (`phone`,`name`,`email`,`teacher`) VALUES('$phone','$name','$email','$teacher')");

  $mysql->close();

  #header('Location: /');

  #exit('<meta http-equiv = "refresh" content = "0; url = index.html" />');
?>
