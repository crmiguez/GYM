// Inicializa la sesion del usuario en el sistema.
function ListTables() {

	// Definimos quien quiere hacer que.
	var actor = "Table";
	var action = "ToList";

	// Componemos un diccionario con los datos.
    var structData={
        "actor":actor,
        "action":action
	};

	// Convertimos el diccionario a Json.
	var jsonData = JSON.stringify(structData);

	// Ejecutamos la accion.
	$.post(
        '../../../back/RequestManager.php',
        { data : jsonData },
        function(reply)
        {
			list = JSON.parse(reply);

			var row = '<ul>';
			for (var i = 0; i < list.length; i++) {
				var id = "'"+list[i]['id']+"'";
				var name = "'"+list[i]['name']+"'";
				row += '<li><a onclick="ReadAndFillTable('+id+');" data-toggle="modal" data-target="#myModalTableDetail">'+ name +'</a></li>';
			}
			row += '</ul>';

			$("#listTables").empty();
			$("#listTables").append(row);
		}
    )
	.error(
		function() {
			console.log('REQUEST FAIL !!!');
		}
    );
}


// Rellena los datos del modal de perfil.
function ReadAndFillTable(id) {

	// Definimos quien quiere hacer que.
	var actor = "Table";
	var action = "ToRead";

	// Componemos un diccionario con los datos.
	var structData={
		"actor":actor,
		"action":action,
		"id":id
	};

	// Convertimos el diccionario a Json.
	var jsonData = JSON.stringify(structData);

	// Ejecutamos la accion.
	$.post(
		'../../../back/RequestManager.php',
		{ data : jsonData },
		function(reply)
		{
	  		list = JSONlist = JSON.parse(reply);
			document.getElementById("edVzTableID").value = list['id'];
			document.getElementById("edVzTableName").value = list['name'];
			document.getElementById("edVzTableDiff").value = list['dificulty'];
			document.getElementById("edVzTableDesc").value = list['description'];
		}
	)
	.error(
		function() {
			console.log('REQUEST FAIL !!!');
		}
	);
}


// Modifica los datos del usuario.
function UpdateAndFillTable()
{
	// Definimos quien quiere hacer que.
	var actor = "Table";
	var action = "ToUpdate";

	// Leemos los datos de los inputs del html.
	var id          = $("#edVzTableID").val();
	var name        = $("#edVzTableName").val();
	var dificulty    = $("#edVzTableDiff").val();
	var description = $("#edVzTableDesc").val();

	// Componemos un diccionario con los datos.
    var structData = {
		"actor"       : actor,
        "action"      : action,
		"id"          : id,
		"name"        : name,
		"dificulty"    : dificulty,
		"description" : description
	};

	// Convertimos el diccionario a Json.
    var jsonData = JSON.stringify(structData);

	// Ejecutamos la accion.
	$.post(
        '../../../back/RequestManager.php',
        { data : jsonData },
        function(reply)
        {
			alert(reply);
			ListTables();
        }
    )
    .error(
		function() {
			console.log('REQUEST FAIL !!!');
		}
    );
}

// Modifica los datos del usuario.
function NewTable()
{
	// Definimos quien quiere hacer que.
	var actor = "Table";
	var action = "ToCreate";

	// Leemos los datos de los inputs del html.
	var name      = $("#edCrTableName").val();
	var dificulty = $("#edCrTableDiff").val();
	var description = $("#edCrTableDesc").val();

	// Componemos un diccionario con los datos.
    var structData = {
        "actor"       : actor,
        "action"      : action,
		"name"        : name,
		"dificulty"    : dificulty,
		"description" : description
	};

	// Convertimos el diccionario a Json.
    var jsonData = JSON.stringify(structData);

	// Ejecutamos la accion.
	$.post(
        '../../../back/RequestManager.php',
        { data : jsonData },
        function(reply)
        {
			alert(reply);
			ListTables();
        }
    )
    .error(
		function() {
			console.log('REQUEST FAIL !!!');
		}
    );
}

// Rellena los datos del modal de perfil.
function DeleteTable()
{
	// Definimos quien quiere hacer que.
	var actor = "Table";
	var action = "ToDelete";
	var id = $("#edVzTableID").val();

	// Componemos un diccionario con los datos.
	var structData={
		"actor":actor,
		"action":action,
		"id":id
	};

	// Convertimos el diccionario a Json.
	var jsonData = JSON.stringify(structData);

	// Ejecutamos la accion.
	$.post(
		'../../../back/RequestManager.php',
		{ data : jsonData },
		function(reply)
		{
			alert(reply);
			ListTables();
		}
	)
	.error(
		function() {
			console.log('REQUEST FAIL !!!');
		}
	);
}
