$("#miformulario").submit(function(evento){
	evento.prenventDefault();
	//-console.info("Activando formulario....");-//
	var cadena=$(this).serialize();
	//console.info(cadena);//
	$.ajax({
		url:"http://localhost/prueba.php"
	}).done(function(respuesta){
		$(".mensaje").html(respuesta);
	});
});