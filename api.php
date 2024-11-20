<?php
// Configurar los encabezados para permitir el acceso desde otras fuentes (CORS)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

// Configuración de conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "unadm";

try {
    // Crear una conexión a la base de datos con PDO
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(["error" => "Error de conexión: " . $e->getMessage()]);
    exit();
}

// Leer los datos recibidos en el cuerpo de la solicitud
$data = json_decode(file_get_contents("php://input"), true);

// Verificar que la solicitud sea POST y que los datos estén presentes
if ($_SERVER["REQUEST_METHOD"] == "POST" && !empty($data)) {
    // Obtener y validar cada campo requerido
    $nombre = $data['nombre'] ?? null;
    $apellidoPaterno = $data['apellidoPaterno'] ?? null;
    $apellidoMaterno = $data['apellidoMaterno'] ?? null;
    $correo = $data['correo'] ?? null;
    $identificacion = $data['identificacion'] ?? null;
    $curso = $data['curso'] ?? null;
    $curp = $data['curp'] ?? null;
    $rfc = $data['rfc'] ?? null;

    // Validar que los campos obligatorios no estén vacíos
    if (!$nombre || !$correo || !$identificacion || !$curso) {
        echo json_encode(["error" => "Datos incompletos. Por favor verifica los campos."]);
        exit();
    }

    // Intentar realizar la inserción de los datos en la base de datos
    try {
        $sql = "INSERT INTO inscripciones (nombre, apellido_paterno, apellido_materno, correo, identificacion, curso, curp, rfc) 
                VALUES (:nombre, :apellidoPaterno, :apellidoMaterno, :correo, :identificacion, :curso, :curp, :rfc)";
        $stmt = $conn->prepare($sql);

        // Asignar valores a cada parámetro de la consulta preparada
        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':apellidoPaterno', $apellidoPaterno);
        $stmt->bindParam(':apellidoMaterno', $apellidoMaterno);
        $stmt->bindParam(':correo', $correo);
        $stmt->bindParam(':identificacion', $identificacion);
        $stmt->bindParam(':curso', $curso);
        $stmt->bindParam(':curp', $curp);
        $stmt->bindParam(':rfc', $rfc);

        // Ejecutar la consulta
        $stmt->execute();
        
        // Responder con un mensaje de éxito en formato JSON
        echo json_encode(["status" => "success", "message" => "Inscripción exitosa"]);
    } catch (PDOException $e) {
        // Manejo de errores en caso de fallo en la inserción
        echo json_encode(["error" => "Error al guardar los datos: " . $e->getMessage()]);
    }
} else {
    // Responder con un error si la solicitud no es válida
    echo json_encode(["error" => "Solicitud no válida."]);
}
?>
