<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $identificacion = $_POST['identificacion'];
    $curso = $_POST['curso'];

    // Validación en el servidor
    if (strlen($identificacion) >= 6 && filter_var($correo, FILTER_VALIDATE_EMAIL) && !empty($nombre) && !empty($curso)) {
        
        // Escapar variables para evitar inyección SQL
        $nombre = mysqli_real_escape_string($conexion, $nombre);
        $correo = mysqli_real_escape_string($conexion, $correo);
        $identificacion = mysqli_real_escape_string($conexion, $identificacion);
        $curso = mysqli_real_escape_string($conexion, $curso);

        // Insertar en la base de datos
        $sql = "INSERT INTO inscripciones (nombre, correo, identificacion, curso) VALUES ('$nombre', '$correo', '$identificacion', '$curso')";

        if (mysqli_query($conexion, $sql)) {
            header("Location: ../confirmacion.html?status=success");
        } else {
            echo "Error en el registro. Por favor, intenta nuevamente.";
        }
    } else {
        echo "Datos inválidos. Asegúrate de que el correo sea válido y el número de identificación tenga al menos 6 caracteres.";
    }
}

mysqli_close($conexion);
?>
