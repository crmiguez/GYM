<?php
// Creacion del objeto controlador.
$RM = new RequestManager();
// Ejecucion de una peticion recibida.
$RM->Handler();

class RequestManager
{
	private $data; // Datos recibidos por POST.
	private $actor; // Clase de la que necesitaremos el modelo.
	private $action; // Accion concreta, disponible en el modelo del actor.

	function __construct() {
		$this->data = json_decode($_POST['data'], true);
		$this->actor = $this->data['actor'];
		$this->action = $this->data['action'];
		unset($this->data['actor'],$this->data['action']);
	}

	function Handler() {
		$db = $this->ConnectDB();
		// Segun la 'clase' que haga la request, importo su modelo.
		require_once( __DIR__."/models/".$this->actor.".php" );
        $currentActor = new $this->actor();
		// Se obtiene un objeto mysqli en base a la request.
		$sqlData = $currentActor->Handler( $this->action, $db, $this->data );
		// Cerramos la conexion con la base de datos.
		// Se retorna codificada en JSON, la informacion parseada
		// a la peticion javascript que nos invoco.
		echo $sqlData;
	}

    function ConnectDB(){
         if (!$link = mysql_connect('localhost:3306', 'gymapp', 'gymapp')) {
		    echo 'No pudo conectarse a mysql';
		    exit;
		}

		if (!mysql_select_db('gymapp', $link)) {
		    echo 'No pudo seleccionar la base de datos';
		    exit;
		}
		mysql_set_charset('utf8',$link);
        return $link;
    }

    function RequestDebug()
    {
        $who  = "\nActor: ".$this->actor;
        $what = "\nAction: ".$this->action;
        $with = "\nData: ".var_dump($this->data);
        echo "\n".$who.$what.$with."\n\n";
    }
}
?>
