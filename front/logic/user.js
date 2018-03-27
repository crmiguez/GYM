// Finaliza la sesion del usuario en el sistema.
function LogoutUser() {
	localStorage.setItem("log", false);
	localStorage.removeItem("cUser");
	renderHeader();
}


// Inicializa la sesion del usuario en el sistema.
function LoginUser() {

	// Definimos quien quiere hacer que.
	var actor = "User";
	var action = "ToLogin";

	// Leemos los datos de los inputs del html.
	var email= $("#edEmail").val();
	var pass= $("#edPass").val();
	console.log(email);
	// Componemos un diccionario con los datos.
	var structData={
		"actor":actor,
		"action":action,
		"email":email,
		"pass":pass
	};

	// Convertimos el diccionario a Json.
	var jsonData = JSON.stringify(structData);

	// Ejecutamos la accion.
	$.post(
		'../../back/RequestManager.php',
		{ data : jsonData },
		function(reply)
		{
			list = JSON.parse(reply);
			localStorage.setItem("log", true);
			console.log(list['email']);
			console.log(list['id']);
			localStorage.setItem("cUserId", list['id']);
			localStorage.setItem("cUser", list['email']);
			localStorage.setItem("cUserKind", list['kind']);
			renderHeader();
			alert("Bienvenido, nuestro querido: "+list['email']);
		}
	)
	.error(
		function() {
			console.log('REQUEST FAIL !!!');
		}
	);
}

// Inicializa la sesion del usuario en el sistema.
function userSessions(){
	// Definimos quien quiere hacer que.
	var actor = "Session";
	var action = "getReservationByUser";

	// Componemos un diccionario con los datos.
	var structData={
		"actor":actor,
		"action":action,
		"id_user":localStorage.getItem("cUserId")
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
			console.log(list);
			var row = '<ul>';
			for (var i = 0; i < list.length; i++) {
				var id = "'"+list[i]['id']+"'";
				var name = "'"+list[i]['name']+"'";
				row += '<li><a onclick="ReadAndFillTable('+id+');" data-toggle="modal" data-target="#myModalTableDetail">'+ name +'</a></li>';
			}
			row += '</ul>';

			$("#listSessionsUser").empty();
			$("#listSessionsUser").append(row);
		}
	)
	.error(
		function() {
			console.log('REQUEST FAIL !!!');
		}
	);
}
function ListUsers() {

	// Definimos quien quiere hacer que.
	var actor = "User";
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
			console.log(list);

			var row = '<ul>';
			for (var i = 0; i < list.length; i++) {
				var mail = "'"+list[i]['email']+"'";
				row += '<li><a onclick="ReadAndFillUser('+mail+')" data-toggle="modal" data-target="#myModalViewProfile">'+ mail +'</a></li>';
			}
			row += '</ul>';

			$("#listUsers").empty();
			$("#listUsers").append(row);
		}
	)
	.error(
		function() {
			console.log('REQUEST FAIL !!!');
		}
	);
}


// Rellena los datos del modal de perfil.
function ReadAndFillUser(email) {

	// Definimos quien quiere hacer que.
	var actor = "User";
	var action = "ToRead";

	// Componemos un diccionario con los datos.
	var structData={
		"actor":actor,
		"action":action,
		"email":email
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
			document.getElementById("edVpName").value = list['name'];
			document.getElementById("edVpLastname1").value = list['lastname1'];
			document.getElementById("edVpLastname2").value = list['lastname2'];
			document.getElementById("edVpMail").value = list['email'];
			document.getElementById("edVpTelf").value = list['telf'];
			document.getElementById("edVpPass").value = list['pass'];
			document.getElementById("edVpBirthday").value = list['birthday'];
			document.getElementById("edVpDirection").value = list['direction'];
			document.getElementById("edVpHeight").value = list['height'];
			document.getElementById("edVpWeight").value = list['weight'];
			var val = list['gender'];
			var sel = document.getElementById('edVpGen');
			for(var opt, j = 0; opt = sel.options[j]; j++) {
				if(opt.value == val) {
					sel.selectedIndex = j;
					break;
				}
			}
			document.getElementById("edVpAvatar").value = list['avatar'];
		}
	)
	.error(
		function() {
			console.log('REQUEST FAIL !!!');
		}
	);
}


// Modifica los datos del usuario.
function UpdateAndFillUser()
{
	// Definimos quien quiere hacer que.
	var actor = "User";
	var action = "ToUpdate";

	// Leemos los datos de los inputs del html.
	var email     = $("#edVpMail").val();
	var telf      = $("#edVpTelf").val();
	var name      = $("#edVpName").val();
	var lastname1 = $("#edVpLastname1").val();
	var lastname2 = $("#edVpLastname2").val();
	var pass      = $("#edVpPass").val();
	var birthday  = $("#edVpBirthday").val();
	var direction = $("#edVpDirection").val();
	var height    = $("#edVpHeight").val();
	var weight    = $("#edVpWeight").val();
	var gender    = $("#edVpGen").val();
	var avatar    = $("#edVpAvatar").val();
	var kind      = 2;

	// Componemos un diccionario con los datos.
	var structData = {
		"actor"     : actor,
		"action"    : action,
		"email"     : email,
		"telf"      : telf,
		"pass"      : pass,
		"name"      : name,
		"lastname1" : lastname1,
		"lastname2" : lastname2,
		"birthday"  : birthday,
		"direction" : direction,
		"height"    : height,
		"weight"    : weight,
		"gender"    : gender,
		"avatar"    : avatar,
		"kind"      : kind
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
			ListUsers();
		}
	)
	.error(
		function() {
			console.log('REQUEST FAIL !!!');
		}
	);
}

// Modifica los datos del usuario.
function NewUser()
{
	// Definimos quien quiere hacer que.
	var actor = "User";
	var action = "ToCreate";

	// Leemos los datos de los inputs del html.
	var email     = $("#edCrMail").val();
	var telf      = $("#edCrTelf").val();
	var name      = $("#edCrName").val();
	var lastname1 = $("#edCrLastname1").val();
	var lastname2 = $("#edCrLastname2").val();
	var pass      = $("#edCrPass").val();
	var birthday  = $("#edCrBirthday").val();
	var direction = $("#edCrDirection").val();
	var height    = $("#edCrHeight").val();
	var weight    = $("#edCrWeight").val();
	var gender    = $("#edCrGen").val();
	var avatar    = $("#edCrAvatar").val();
	var kind      = 2;

	// Componemos un diccionario con los datos.
	var structData = {
		"actor"     : actor,
		"action"    : action,
		"email"     : email,
		"telf"      : telf,
		"pass"      : pass,
		"name"      : name,
		"lastname1" : lastname1,
		"lastname2" : lastname2,
		"birthday"  : birthday,
		"direction" : direction,
		"height"    : height,
		"weight"    : weight,
		"gender"    : gender,
		"avatar"    : avatar,
		"kind"      : kind
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
			ListUsers();
		}
	)
	.error(
		function() {
			console.log('REQUEST FAIL !!!');
		}
	);
}

// Rellena los datos del modal de perfil.
function DeleteUser()
{
	// Definimos quien quiere hacer que.
	var actor = "User";
	var action = "ToDelete";
	var email = $("#edVpMail").val();

	console.log("mail: "+email);

	// Componemos un diccionario con los datos.
	var structData={
		"actor":actor,
		"action":action,
		"email":email
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
			ListUsers();
		}
	)
	.error(
		function() {
			console.log('REQUEST FAIL !!!');
		}
	);
}
