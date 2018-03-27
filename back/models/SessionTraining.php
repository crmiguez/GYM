<?php

class SessionTraining
{
  function Handler($action,$db,$data)
  {
    return $this->$action($db,$data);
  }

  function ToCreate($db,$data)
  {
    $id_user = 0+$data['id_user'];
    $date_comment_sessiontraining = 0+$data['date_comment_sessiontraining'];

    $sql = sprintf(
      "INSERT INTO sessiontraining(id_user, comment_sessiontraining, date_comment_sessiontraining) VALUES ('%d','%s','%d')",
      $id_user, mysql_real_escape_string($data['comment_sessiontraining']),
      $date_comment_sessiontraining
    );
    mysql_query($sql, $db);
    return "Register done :D";
  }


  function ToUpdate($db,$data)
  {//AQUI NO SE SI ES CORRECTO MODIFICAR LA FECHA DEL COMENTARIO
    $id = 0+$data['id'];
    $id_user = 0+$data['id_user'];
    $date_comment_sessiontraining = 0+$data['date_comment_sessiontraining'];

    $sql = sprintf(
      "UPDATE sessiontraining SET id_user='%d',comment_sessiontraining='%s',date_comment_sessiontraining='%d' WHERE id = '%d'",
      $id_user, mysql_real_escape_string($data['comment_sessiontraining']),
      $date_comment_sessiontraining, $id
    );
    mysql_query($sql, $db);
    return "Update done :D";
  }


  function ToList($db,$data)
  {
    $sql = sprintf("SELECT * FROM sessiontraining");
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
      "SELECT * FROM sessiontraining WHERE id='%d'",$id
    );
    $res = mysql_query($sql, $db);
    $data = mysql_fetch_assoc($res) ;
    return json_encode($data);
  }


  function ToDelete($db,$data)
  {
    $id = 0+$data['id'];

    $sql = sprintf(
      "DELETE FROM sessiontraining WHERE id='%d'", $id
    );
    mysql_query($sql, $db);
    return "Borrado con éxito.";
  }
}
?>
