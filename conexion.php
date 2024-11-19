<?php
$servidor = "localhost";
$usuario = "root";
$contrasena = "";
$bd = "unadm";

// Crear conexión
$conexion = mysqli_connect($servidor, $usuario, $contrasena, $bd);

// Comprobar la conexión
if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}
?>
