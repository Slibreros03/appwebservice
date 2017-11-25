$("#miformulario").submit(function(evento){
	evento.prenventDefault();
	//-console.info("Activando formulario....");-//
	var cadena=$(this).serialize();
	//console.info(cadena);//
	$.ajax({
		url:"http://especialistasenlaweb.com/base.php"
		type: "post",
		data:cadena
	}).done(function(respuesta){
		$(".mensaje").html(respuesta);
	});
});