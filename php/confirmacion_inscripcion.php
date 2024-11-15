<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmación de Inscripción</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header>
        <img src="img/Imagen1" alt="Imagen1">
    </header>

    <section>
        <h2>Confirmación de Inscripción</h2>
        <?php
            if (isset($_GET['status'])) {
                if ($_GET['status'] == 'success') {
                    echo "<p>Inscripción realizada con éxito. ¡Gracias por inscribirte!</p>";
                } elseif ($_GET['status'] == 'error') {
                    echo "<p>Hubo un error en el procesamiento de tu inscripción. Por favor, inténtalo de nuevo.</p>";
                } elseif ($_GET['status'] == 'invalid') {
                    echo "<p>Los datos proporcionados no son válidos. Verifica e intenta nuevamente.</p>";
                }
            } else {
                echo "<p>No se recibió ninguna solicitud de inscripción.</p>";
            }
        ?>
    </section>

    <footer>
        <p>Contacto: contacto@unadm.edu.mx | Teléfono: (55) 1234-5678</p>
    </footer>
</body>
</html>
