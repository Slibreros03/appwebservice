<?php
	header("Access-Control-Allow-Origin:http://especialistasenlaweb.com");
	$n=$_POST['nombre'];
	$c=$_POST['correo'];
	$com=$_POST['com'];

	$conectar=new mysqli("localhost", "dxxsmxei_SLFuser","uaWZ+9zP^f*#", "dxxsmxei_SLFmibase");
	$consulta="INSERT into persona(nombre, correo, comentario) values('$n', '$c', '$com')";
	$conectar->query($consulta)or die(mysqli_error());
	echo "<hr><h2>Dato Insertado</h2>";

?>