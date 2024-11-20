<?php
// Configuración de encabezados CORS para permitir acceso desde cualquier origen (necesario si usas ngrok o servidores externos)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "unadm";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(["error" => "Error de conexión: " . $e->getMessage()]);
    exit();
}

// Leer los datos del cuerpo de la solicitud POST
$data = json_decode(file_get_contents("php://input"), true);

if ($_SERVER["REQUEST_METHOD"] == "POST" && !empty($data)) {
    $nombre = $data['nombre'] ?? null;
    $apellidoPaterno = $data['apellidoPaterno'] ?? null;
    $apellidoMaterno = $data['apellidoMaterno'] ?? null;
    $correo = $data['correo'] ?? null;
    $identificacion = $data['identificacion'] ?? null;
    $curso = $data['curso'] ?? null;
    $curp = $data['curp'] ?? null;
    $rfc = $data['rfc'] ?? null;

    // Validación de datos básicos
    if (!$nombre || !$correo || !$identificacion || !$curso) {
        echo json_encode(["error" => "Datos incompletos. Por favor verifica los campos."]);
        exit();
    }

    // Preparar e insertar datos en la base de datos
    try {
        $sql = "INSERT INTO inscripciones (nombre, apellido_paterno, apellido_materno, correo, identificacion, curso, curp, rfc) 
                VALUES (:nombre, :apellidoPaterno, :apellidoMaterno, :correo, :identificacion, :curso, :curp, :rfc)";
        $stmt = $conn->prepare($sql);

        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':apellidoPaterno', $apellidoPaterno);
        $stmt->bindParam(':apellidoMaterno', $apellidoMaterno);
        $stmt->bindParam(':correo', $correo);
        $stmt->bindParam(':identificacion', $identificacion);
        $stmt->bindParam(':curso', $curso);
        $stmt->bindParam(':curp', $curp);
        $stmt->bindParam(':rfc', $rfc);

        $stmt->execute();
        echo json_encode(["status" => "success", "message" => "Inscripción exitosa"]);
    } catch (PDOException $e) {
        echo json_encode(["error" => "Error al guardar los datos: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["error" => "Solicitud no válida."]);
}
?>
