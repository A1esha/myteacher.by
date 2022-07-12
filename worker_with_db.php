<?php require_once ('Connection.php');
  

  /// ебнутым образом распарсил название столбца и чему должно быть равно
  

  $need_type = $_GET["dataquery"];
  //var_dump($_GET);
  //var_dump($_GET);

  $jsonData = json_decode($need_type, true);



  

  $id = strpos($jsonData["namer"], ",");

  
  $Name = substr($jsonData["namer"], 0, $id);
  $Value = substr($jsonData["namer"], $id + 1, strlen($jsonData["namer"]) - $id - 1);


  //var_dump($Name); var_dump($Value);


  $table = mysqli_connect($host, $user, $password, $database);
  mysqli_set_charset($table, "utf8");

  /// пытаюсь сделать запрос и вернуть свoе чудо json файлом
  $query = "SELECT * FROM `teachers_table` WHERE `".$Name."` = '".$Value."'";

  
  $res = mysqli_query($table, $query) or die(mysql_error($table));

  $table->close();
  

  $data = new stdClass();

  $i = 0;

  while($myrow = mysqli_fetch_assoc($res)){
    $key = (++$i);
    $data->$key = array($myrow['Имя'], $myrow['Предмет'], $myrow['Рейтинг'], $myrow['Описание'], $myrow['Мин класс'], $myrow['Макс класс']);
  }
  
  header('Content-Type: application/json; charset = uft-8');

  var_dump($data);
  ob_end_clean(); // очищает буфер вывода

  echo json_encode($data);
?>