function getActivitysView()
{

    var structData={
        "actor":"Activity",
        "action":"ToList"
	};

    var jsonData = JSON.stringify(structData);
    // console.log("login json:"+jsonData);

	$.post(
		'../../../back/RequestManager.php',
		{ data : jsonData },
        function(reply)
		{
			$("#events-list").empty();
			console.log(reply);
			list = JSON.parse(reply);
			console.log(list.toString());
			for (var i = 0; i < list.length; i++) {
				appendActivity(list[i]);
			}

    	}
	).error(
        function(){
            console.log('REQUEST FAIL !!!');
        }
    );
}
function appendActivity(activity){
	console.log("ac:"+activity);

	$("#events-list").append(
		   	'<div class="col-xs-6">\
		   	 <div class="" id="div-'+activity["id"]+'">\
             <a >\
				 <div class="arrival-info">\
                 <br>\
                 <hr> \
                 <h4>'+activity["name"]+'</h4>\
                 <hr> \
                 <div class="offer-grid3"> \
					<p>Plazas: ' + activity["max_places"] + '</p>\
					<p " name="edacid">Plazas: ' + activity["id"] + '</p>\
                    <p>Entrenador: ' + activity["id_user"] + '</p>\
                    <p>Descripcion: ' + activity["description"] + '</p>\
                    <br> \
                    <button type="button" class="btn btn-success btn-block"  onclick="userOnActivity(\''+activity["id"]+'\'); "data-toggle="modal" data-target="#myModalListSessions">Apuntate</button>\
					</div>\
                    </div> \
			  </a>\
			  </div>\
		 	</div>'
		   	);

}

function initActivitys(){
	getActivitysView();

}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function userOnActivity(id){
	var id_user=localStorage.getItem("id_user");

	var structData={
        "actor":"Session",
        "action":"ToListByActivity",
        "id_activity":id
	};

    var jsonData = JSON.stringify(structData);
    // console.log("login json:"+jsonData);

	$.post(
		'../../../back/RequestManager.php',
		{ data : jsonData },
        function(reply)
		{
			$("#session-modal").empty();
			console.log(reply);
			list = JSON.parse(reply);
			console.log(list.toString());
			for (var i = 0; i < list.length; i++) {
				appendSession(list[i]);
			}

    	}
	).error(
        function(){
            console.log('REQUEST FAIL !!!');
        }
    );
	// console.log("user on activity");

}
function singUpOnSession(id,date){
	if(localStorage.getItem("log")=="true"){
		var id_user=localStorage.getItem("id_user");
		var structData={
	        "actor":"Session",
	        "action":"newReservation",
	        "id_session":id,
	        "id_user":id_user,
	        "date":date
		};
		var jsonData = JSON.stringify(structData);
	    // console.log("login json:"+jsonData);

		$.post(
			'../../../back/RequestManager.php',
			{ data : jsonData },
	        function(reply)
			{
				console.log(reply);
				console.log("insert on reservation");
	    	}
		).error(
	        function(){
	            console.log('REQUEST FAIL !!!');
	        }
	    );
	}
	else{
		console.log("you must log in");
	}
}
function appendActivityPromotion(activity){
	console.log("ac:"+activity);

	$("#offer-especial").append(
		   	'<div class="col-xs-6">\
		   	 <div class="" id="offer-grid'+activity["id"]+'">\
             <a >\
				 <div class="offer-grids">\
                 <br>\
                 <hr> \
                 <h4>'+activity["name"]+'</h4>\
                 <hr> \
                 <div class="col-md-6 grid-left"> \
					<p>Plazas: ' + activity["max_places"] + '</p>\
					<p " name="edacid">Plazas: ' + activity["id"] + '</p>\
                    <p>Entrenador: ' + activity["id_user"] + '</p>\
                    <p>Descripcion: ' + activity["description"] + '</p>\
					<p>Descuento: ' + activity["discount"] + '</p>\
					<p>Válido hasta: ' + activity["promotion_until"] + '</p>\
                    <br> \
                    <button type="button" class="btn btn-success btn-block"  onclick="userOnActivity(\''+activity["id"]+'\'); "data-toggle="modal" data-target="#myModalListPromotions">Ver más</button>\
					</div>\
                    </div> \
			  </a>\
			  </div>\
		 	</div>'
		   	);

}
function appendSession(session){

	$("#session-modal").append(
		   	'<div class="col-xs-6">\
		   	 <div class="" id="div-'+session["id"]+'">\
             <a >\
				 <div class="arrival-info">\
                 <br>\
                 <hr> \
                 <h4>'+session["name"]+'</h4>\
                 <hr> \
                 <div class="offer-grid3"> \
					<p>Fecha: ' + session["date"] + '</p>\
                    <br> \
                    <button type="button" class="btn btn-success btn-block" onclick="singUpOnSession(\''+session['id']+','+session['date']+'\')" >Apuntate</button>\
					</div>\
                    </div> \
			  </a>\
			  </div>\
		 		</div>'
		   	);
}

function appendSessionPromotion(session){

	$("#session-modaltwo").append(
		   	'<div class="col-xs-6">\
		   	 <div class="" id="div-'+session["id"]+'">\
             <a >\
				 <div class="arrival-info">\
                 <br>\
                 <hr> \
                 <h4>'+session["name"]+'</h4>\
                 <hr> \
                 <div class="offer-grid3"> \
					<p>Fecha: ' + session["date"] + '</p>\
                    <br> \
                    <button type="button" class="btn btn-success btn-block" onclick="" >Apuntate</button>\
					</div>\
                    </div> \
			  </a>\
			  </div>\
		 		</div>'
		   	);
}
