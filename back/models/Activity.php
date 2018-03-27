<?php

class Activity
{
    function Handler($action,$db,$data)
    {
        return $this->$action($db,$data);
    }

    function ToCreate($db,$data)
    {
        //Este método es usado por el administrador y el entrenador/es que dan de alta actividades.
        $id_user = 0+$data['id_user'];
        $max_places = 0+$data['max_places'];

        $sql = sprintf(
    			"INSERT INTO activity(id_user,description,name,max_places) VALUES ('%d','%s','%s','%d')",
          $id_user,mysql_real_escape_string($data['description']),
    			mysql_real_escape_string($data['name']), $max_places
    		);
    		mysql_query($sql, $db);
    		return "Register done :D";
    }


    function ToUpdate($db,$data)
    {
        $id = 0+$data['id'];
        $id_user = 0+$data['id_user'];
        $max_places = 0+$data['max_places'];

        $sql = sprintf(
    			"UPDATE activity SET id_user='%d',description='%s',name='%s',max_places='%d' WHERE id = '%d'",
          $id_user,mysql_real_escape_string($data['description']),
    			mysql_real_escape_string($data['name']), $max_places, $id
    		);
    		mysql_query($sql, $db);
    		return "Update done :D";
    }


    function ToList($db,$data)
    {
        $sql = sprintf("SELECT * FROM activity");
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
    			"SELECT * FROM activity WHERE id='%d'",$id
    		);
    		$res = mysql_query($sql, $db);
    		$data = mysql_fetch_assoc($res) ;
    		return json_encode($data);
    }


    function ToDelete($db,$data)
    {
        $id = 0+$data['id'];

        $sql = sprintf(
      		"DELETE FROM activity WHERE id='%d'",$id
      	);
      	mysql_query($sql, $db);
      	return "Borrado con éxito.";
    }
}
?>
