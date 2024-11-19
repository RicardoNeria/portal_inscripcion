<?php
// Configurar los encabezados CORS para permitir el acceso desde otras fuentes (como GitHub Pages)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

// Conexión a la base de datos MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "unadm"; // Reemplaza con el nombre de tu base de datos en XAMPP

// Crear conexión con la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar si hubo algún error en la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Leer los datos del cuerpo de la solicitud POST
$data = json_decode(file_get_contents("php://input"));

// Verificar si los datos existen y si es una solicitud POST
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($data->nombre) && isset($data->correo) && isset($data->identificacion) && isset($data->curso)) {
    $nombre = $conn->real_escape_string($data->nombre);
    $correo = $conn->real_escape_string($data->correo);
    $identificacion = $conn->real_escape_string($data->identificacion);
    $curso = $conn->real_escape_string($data->curso);

    // Crear la consulta SQL para insertar los datos en la base de datos
    $sql = "INSERT INTO inscripciones (nombre, correo, identificacion, curso) VALUES ('$nombre', '$correo', '$identificacion', '$curso')";

    // Ejecutar la consulta SQL e informar si fue exitosa o si hubo algún error
    if ($conn->query($sql) === TRUE) {
        echo json_encode(array("message" => "Datos guardados correctamente"));
    } else {
        echo json_encode(array("error" => "Error al guardar los datos: " . $conn->error));
    }
} else {
    echo json_encode(array("error" => "Datos incompletos o método no permitido"));
}

// Cerrar la conexión a la base de datos
$conn->close();
?>
