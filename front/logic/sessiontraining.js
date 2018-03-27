function getSessionTrainingView()
{

    var loginData={
        "actor":"User",
        "action":"List"
	};
	
    var loginJSON = JSON.stringify(loginData);
    console.log("login json:"+loginJSON);

	$.getScript('front/statics/js/dao/sessiontraining.js',
		function() {
			console.log("llamada a getsessiontrainingdao")
			getSessionTrainingsDao(loginJSON);
		}
	);
}
function appendSessionTraining(sessiontraining){
	console.log("ac:"+sessiontraining);
	$("#events-list").append(
		   	'<div class="col-xs-12 col-sm-6 col-md-3 col-lg-2 feature-grid">\
		   	 <div class="caja-evento" id="div-'+sessiontraining.id+'">\
			 <a >\
				 <div class="arrival-info">\
					<p>Usuario:'+sessiontraining.id_user+'</h4>\
					<p>Tabla:' + sessiontraining.id_table + '</p>\
					<p>Ejercicio:' + sessiontraining.id_exercise + '</p>\
					<p>Comentario de la sesión entrenamiento: ' + sessiontraining.comment_sessiontraining + '</p>\
					<p>Fecha comentario: ' + sessiontraining.date_comment_sessiontraining + '</p>\
					</div>\
			  </a>\
			  </div>\
			  <button type="button"class="btn btn-success btn-irsesionentrenamiento" href="#" onclick="userOnSessionTraining(\''+sessiontraining.id+'\');" >Ir en detalle</button>\
		 	</div>'
		   	);

}

function initSessionTrainings(){
	getSessionTrainingView();

	$.getScript('front/statics/js/dao/sessiontraining.js',
		function() {
			console.log('este:'+currentSessionTrainings);
			currentSessionTrainings.forEach(appendSessionTraining);
		}
	);
	
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function userOnActivity(id){

	console.log("user on sessiontraining");
	$.getScript('front/statics/js/dao/user.js',
		function() {
			if(localStorage.getItem("log")=="false"){
				alert("u r not logged in");
			}else{
				console.log(id);
				
				$("#div-"+id).append('<button class="btn btn-warning btn-irsesionentrenamiento" href="#"onclick="userOnActivity();" >Salir sesión entrenamiento</button>');
				//TODO añadir en bd el usuario a la actividad bajar enm uno el aforo refrescar la pagina
			}
		}
	);
}