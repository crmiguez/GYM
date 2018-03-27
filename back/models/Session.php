<?php

class Session
{
  function Handler($action,$db,$data)
  {
    return $this->$action($db,$data);
  }

  function ToCreate($db,$data)
  {
    $id_activity = 0+$data['id_activity'];
    $date = strtotime($data['date']);

    $sql = sprintf(
      "INSERT INTO session(id_activity,id_user,name,date) VALUES ('%d','%s','%s','%d')",
      $id_activity,
      mysql_real_escape_string($data['id_user']),
      mysql_real_escape_string($data['name']), $date
    );
    mysql_query($sql, $db);
    return "Register done :D";
  }


  function ToUpdate($db,$data)
  {
    $id_activity = 0+$data['id_activity'];
    $id_user = 0+$data['id_user'];
    $id = 0+$data['id'];

    $date = strtotime($data['date']);
    $sql = sprintf(
      "UPDATE session SET id_activity='%d',id_user='%d',name='%s',date='%d' WHERE id = '%d'",
      $id_activity, $id_user,
      mysql_real_escape_string($data['name']), $date, $id
    );
    mysql_query($sql, $db);
    return "Update done :D";
  }

  function ToList($db,$data)
  {
    $sql = sprintf("SELECT * FROM session");
    $res = mysql_query($sql, $db);
    $data=[];
    while ($fila = mysql_fetch_assoc($res)) {
      array_push($data, $fila);
    }
    return json_encode($data);
  }
  function ToListByActivity($db,$data){
    $id_activity=0+$data["id_activity"];

    $sql = sprintf("SELECT * FROM session WHERE id_activity='%d' ",$id_activity);
    $res = mysql_query($sql, $db);
    $data=[];
    while ($fila = mysql_fetch_assoc($res)) {
      array_push($data, $fila);
    }
    return json_encode($data);

  }

  function ToGetByID($db,$data){
    $id_session=0+$data["id_session"];

    $sql = sprintf("SELECT * FROM session WHERE id='%d' ",$id_session);
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
      "SELECT * FROM session WHERE id='%d'",$id
    );
    $res = mysql_query($sql, $db);
    $data = mysql_fetch_assoc($res) ;
    return json_encode($data);
  }


  function ToDelete($db,$data)
  {
    $id = 0+$data['id'];

    $sql = sprintf(
      "DELETE FROM session WHERE id='%d'",$id
    );
    mysql_query($sql, $db);
    return "Borrado con éxito.";
  }



function newReservation($db,$data){
    $id_session = 0+$data['id_session'];
    $id_user = 0+$data['id_user'];
    $date = strtotime($data['date']);
    return $date;
    $sql = sprintf(
      "INSERT INTO reservation(id_user,id_session,date) VALUES (%s,'%d','%d')",
      mysql_real_escape_string($data['id_user']),
      $id_session,
      $date
    );
    mysql_query($sql, $db);
    return "Register done :D";
  }

function getReservationBySession($db,$data){
    $id_session = 0+$data['id_session'];

    $sql = sprintf("SELECT * FROM session WHERE id_session='%d' ",$id_session);
    $res = mysql_query($sql, $db);
    $data=[];
    while ($fila = mysql_fetch_assoc($res)) {
      array_push($data, $fila);
    }
    return json_encode($data);
}
function getReservationByUser($db,$data){
    $id_user = 0+$data['id_user'];

    $sql = sprintf("SELECT * FROM session WHERE id_user='%d' ",$id_user);
    $res = mysql_query($sql, $db);
    $data=[];
    while ($fila = mysql_fetch_assoc($res)) {
      array_push($data, $fila);
    }
    return json_encode($data);
}
}
?>
