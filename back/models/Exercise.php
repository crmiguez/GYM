<?php

class Exercise
{
  function Handler($action,$db,$data)
  {
    return $this->$action($db,$data);
  }

  function ToCreate($db,$data)
  {
    $sql = sprintf(
      "INSERT INTO exercise(name,category,description,image,tutorial) VALUES ('%s','%s','%s','%s','%s')",
      mysql_real_escape_string($data['name']),
      mysql_real_escape_string($data['category']),
      mysql_real_escape_string($data['description']),
      mysql_real_escape_string($data['image']),
      mysql_real_escape_string($data['tutorial'])
    );
    mysql_query($sql, $db);
    return "El registo de \"".$data['name']."\" ha sido un exito :D";
  }


  function ToUpdate($db,$data)
  {
    $id = 0+$data['id'];

    $sql = sprintf(
      "UPDATE exercise SET name='%s',category='%s',description='%s',image='%s',tutorial='%s' WHERE id = '%d'",
      mysql_real_escape_string($data['name']),
      mysql_real_escape_string($data['category']),
      mysql_real_escape_string($data['description']),
      mysql_real_escape_string($data['image']),
      mysql_real_escape_string($data['tutorial']), $id
    );
    mysql_query($sql, $db);
    return "La modificacion de \"".$data['name']."\" ha sido un exito :D";
  }


  function ToList($db,$data)
  {
    $sql = sprintf("SELECT * FROM exercise");
    $res = mysql_query($sql, $db);
    $data=[];
    while ($fila = mysql_fetch_assoc($res)) {
      array_push($data, $fila);
    }
    return json_encode($data);
  }


  function ToRead($db,$data)
  {
    $id = 0+$data['id'];

    $sql = sprintf(
      "SELECT * FROM exercise WHERE id='%d'",$id
    );
    $res = mysql_query($sql, $db);
    $data = mysql_fetch_assoc($res) ;
    return json_encode($data);
  }


  function ToDelete($db,$data)
  {
    $id = 0+$data['id'];

    $sql = sprintf(
      "DELETE FROM exercise WHERE id='%d'",$id
    );
    mysql_query($sql, $db);
    return "El borrado de \"".$data['name']."\" ha sido un exito :D";
  }
}
?>
