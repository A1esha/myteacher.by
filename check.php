<?php
  $phone = filter_var(trim($_POST['phone']),
  FILTER_SANITIZE_STRING);

  $name = filter_var(trim($_POST['name']),
  FILTER_SANITIZE_STRING);

  $email = filter_var(trim($_POST['email']),
  FILTER_SANITIZE_STRING);

  if(mb_string($name)<2)
  {
    echo "Введите своё имя корректно";
    exit();
  }
  echo "Привет";
  exit();
 ?>
