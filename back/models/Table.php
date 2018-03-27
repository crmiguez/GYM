<?php

class Table
{
  function Handler($action,$db,$data)
  {
    return $this->$action($db,$data);
  }

  function ToCreate($db,$data)
  {
    $dificulty = 0+$data['dificulty'];

    $sql = sprintf(
      "INSERT INTO exercises_table(name,dificulty,description) VALUES ('%s','%d','%s')",
      mysql_real_escape_string($data['name']), $dificulty,
      mysql_real_escape_string($data['description'])
    );
    mysql_query($sql, $db);
    return "Register done :D";
  }


  function ToUpdate($db,$data)
  {
    $dificulty = 0+$data['dificulty'];
    $id = 0+$data['id'];
    $sql = sprintf(
      "UPDATE exercises_table SET name='%s',dificulty='%d',description='%s' WHERE id = '%d'",
      mysql_real_escape_string($data['name']), $dificulty,
      mysql_real_escape_string($data['description']),$id
    );
    mysql_query($sql, $db);
    return "Update done :D";
  }


  function ToList($db,$data)
  {
    $sql = sprintf("SELECT * FROM exercises_table");
    $res = mysql_query($sql, $db);
    $data=[];
    while ($fila = mysql_fetch_assoc($res)) {
      array_push($data, $fila);
    }
    return json_encode($data);
  }

  function ToListExercise($db,$data)
  {
    $id_table = 0+$data['id_table'];

    $sql = sprintf(
      "SELECT id_exercise,name  FROM routine,exercise WHERE id_table='%d' AND id_exercise=exercise.id", $id_table
    );
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
      "SELECT * FROM exercises_table WHERE id='%d'",$id
    );
    $res = mysql_query($sql, $db);
    $data = mysql_fetch_assoc($res) ;
    return json_encode($data);
  }


  function ToDelete($db,$data)
  {
    $id = 0+$data['id'];

    $sql = sprintf(
      "DELETE FROM exercises_table WHERE id='%d'",$id
    );
    mysql_query($sql, $db);
    return "Borrado con éxito.";
  }
}
?>
