<?php

  $phone = filter_var(trim($_POST['phone']),FILTER_SANITIZE_STRING);

  $name = filter_var(trim($_POST['name']),FILTER_SANITIZE_STRING);

  $email = filter_var(trim($_POST['email']),FILTER_SANITIZE_STRING);

  $mysql = new mysqli('localhost','root','root','students');

  $mysql->query("INSERT INTO `users` (`phone`,`name`,`email`) VALUES('$phone','$name','$email')");

  $mysql->close();
 ?>
