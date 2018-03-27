<?php

class User
{
	function Handler($action,$db,$data) { return $this->$action($db,$data); }

	function ToLogin($db,$data)
	{
		$sql = sprintf(
			"SELECT email, kind FROM user WHERE email='%s' AND pass='%s'",
			mysql_real_escape_string($data['email']),
			mysql_real_escape_string($data['pass'])
		);
		$res = mysql_query($sql, $db);
		$data = mysql_fetch_assoc($res) ;
		return json_encode($data);
	}


	function ToCreate($db,$data)
	{
		$birthday = strtotime($data['birthday']);
		$datehigh = date('d-m-Y H:i:s');
		$telf = 0+$data['telf'];
		$kind = 0+$data['kind'];
		$height = 0+$data['height'];
		$weight = 0+$data['weight'];

		$sql = sprintf(
			"INSERT INTO user(email,name,lastname1,lastname2,pass,telf,direction,kind,avatar,gender,birthday,datehigh,height,weight) VALUES ('%s','%s','%s','%s','%s',%d,'%s',%d,'%s','%s',%d,%d,%d,%d)",
			mysql_real_escape_string($data['email']),
			mysql_real_escape_string($data['name']),
			mysql_real_escape_string($data['lastname1']),
			mysql_real_escape_string($data['lastname2']),
			mysql_real_escape_string($data['pass']),
			$telf, mysql_real_escape_string($data['direction']),
			$kind, mysql_real_escape_string($data['avatar']),
			mysql_real_escape_string($data['gender']),
			$birthday, $datehigh, $height, $weight
		);
		mysql_query($sql, $db);
		return "Register done :D";
	}


	function ToUpdate($db,$data)
	{
		$birthday = strtotime($data['birthday']);
		$telf = 0+$data['telf'];
		$kind = 0+$data['kind'];
		$height = 0+$data['height'];
		$weight = 0+$data['weight'];

		$sql = sprintf(
			"UPDATE user SET name='%s',lastname1='%s',lastname2='%s',pass='%s',telf=%d,direction='%s',kind=%d,avatar='%s',gender='%s',birthday=%d,height=%d,weight=%d WHERE email = '%s'",
			mysql_real_escape_string($data['name']),
			mysql_real_escape_string($data['lastname1']),
			mysql_real_escape_string($data['lastname2']),
			mysql_real_escape_string($data['pass']),
			$telf, mysql_real_escape_string($data['direction']),
			$kind, mysql_real_escape_string($data['avatar']),
			mysql_real_escape_string($data['gender']),
			$birthday, $height, $weight,
			mysql_real_escape_string($data['email'])
		);
		mysql_query($sql, $db);
		return "Update done :D";
	}


	function ToList($db,$data)
	{
		$sql = sprintf("SELECT name, lastname1, email, kind FROM user");
		$res = mysql_query($sql, $db);
		$data=[];
		while ($row = mysql_fetch_assoc($res)) {
			array_push($data, $row);
		}
		return json_encode($data);
	}

	// function ToListId($db,$data)
	// {
	// 	$sql = sprintf("SELECT email FROM user");
	// 	$res = mysql_query($sql, $db);
	// 	$data = mysql_fetch_assoc($res) ;
	// 	return json_encode($data);
	// }


	function ToRead($db,$data)
	{
		$sql = sprintf(
			"SELECT * FROM user WHERE email='%s'",
			mysql_real_escape_string($data['email'])
		);
		$res = mysql_query($sql, $db);
		$data = mysql_fetch_assoc($res) ;
		return json_encode($data);
	}


	function ToDelete($db,$data)
	{
		$sql = sprintf(
			"DELETE FROM user WHERE email='%s'",
			mysql_real_escape_string($data['email'])
		);
		mysql_query($sql, $db);
		return "Delete done :D";
	}
}
?>
