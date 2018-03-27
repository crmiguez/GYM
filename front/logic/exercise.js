// Inicializa la sesion del usuario en el sistema.
function ListExercises() {

	// Definimos quien quiere hacer que.
	var actor = "Exercise";
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
				var id = ""+list[i]['id']+"";
				var name = ""+list[i]['name']+"";
				row += '<li><a onclick="ReadAndFillExercise('+id+');" data-toggle="modal" data-target="#myModalExerciseDetail">'+ name +'</a></li>';
			}
			row += '</ul>';

			$("#listExercises").empty();
			$("#listExercises").append(row);
		}
    )
	.error(
		function() {
			console.log('REQUEST FAIL !!!');
		}
    );
}


// Rellena los datos del modal de perfil.
function ReadAndFillExercise(id) {

	// Definimos quien quiere hacer que.
	var actor = "Exercise";
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
			document.getElementById("edVzExeID").value = list['id'];
			document.getElementById("edVzExeName").value = list['name'];
			document.getElementById("edVzExeCategory").value = list['category'];
			document.getElementById("edVzExeDesc").value = list['description'];
			document.getElementById("edVzExeImg").value = list['image'];
			document.getElementById("edVzExeTutorial").value = list['tutorial'];
		}
	)
	.error(
		function() {
			console.log('REQUEST FAIL !!!');
		}
	);
}


// Modifica los datos del usuario.
function UpdateAndFillExercise()
{
	// Definimos quien quiere hacer que.
	var actor = "Exercise";
	var action = "ToUpdate";

	// Leemos los datos de los inputs del html.
	var id          = $("#edVzExeID").val();
	var name        = $("#edVzExeName").val();
	var category    = $("#edVzExeCategory").val();
	var description = $("#edVzExeDesc").val();
	var image       = $("#edVzExeImg").val();
	var tutorial    = $("#edVzExeTutorial").val();

	// Componemos un diccionario con los datos.
    var structData = {
		"actor"       : actor,
        "action"      : action,
		"id"          : id,
		"name"        : name,
		"category"    : category,
		"description" : description,
		"image"       : image,
		"tutorial"    : tutorial
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
			ListExercises();
        }
    )
    .error(
		function() {
			console.log('REQUEST FAIL !!!');
		}
    );
}

// Modifica los datos del usuario.
function NewExercise()
{
	// Definimos quien quiere hacer que.
	var actor = "Exercise";
	var action = "ToCreate";

	// Leemos los datos de los inputs del html.
	var name      = $("#edCrExeName").val();
	var category = $("#edCrExeCategory").val();
	var description = $("#edCrExeDesc").val();
	var image      = $("#edCrExeImg").val();
	var tutorial  = $("#edCrExeTutorial").val();

	// Componemos un diccionario con los datos.
    var structData = {
        "actor"       : actor,
        "action"      : action,
		"name"        : name,
		"category"    : category,
		"description" : description,
		"image"       : image,
		"tutorial"    : tutorial
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
			ListExercises();
        }
    )
    .error(
		function() {
			console.log('REQUEST FAIL !!!');
		}
    );
}

// Rellena los datos del modal de perfil.
function DeleteExercise()
{
	// Definimos quien quiere hacer que.
	var actor = "Exercise";
	var action = "ToDelete";
	var id = $("#edVzExeID").val();
	var name = $("#edVzExeName").val();

	// Componemos un diccionario con los datos.
	var structData={
		"actor":actor,
		"action":action,
		"id":id,
		"name":name
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
			ListExercises();
		}
	)
	.error(
		function() {
			console.log('REQUEST FAIL !!!');
		}
	);
}
