// Función para generar automáticamente la CURP a partir de los datos del formulario
function generarCURP(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, estadoNacimiento) {
    const inicialPaterno = apellidoPaterno.charAt(0).toUpperCase();
    const primeraVocalInterna = apellidoPaterno.slice(1).match(/[AEIOU]/i) ? apellidoPaterno.slice(1).match(/[AEIOU]/i)[0].toUpperCase() : '';
    const inicialMaterno = apellidoMaterno.charAt(0).toUpperCase();
    const inicialNombre = nombre.charAt(0).toUpperCase();
    const fecha = fechaNacimiento.split('-'); // Formato esperado YYYY-MM-DD
    const año = fecha[0].slice(2);
    const mes = fecha[1];
    const dia = fecha[2];
    const estado = estadoNacimiento.toUpperCase();

    return `${inicialPaterno}${primeraVocalInterna}${inicialMaterno}${inicialNombre}${año}${mes}${dia}${estado}`;
}

// Función para generar automáticamente el RFC en base a la CURP (sin homoclave)
function generarRFC(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento) {
    // El RFC es similar a los primeros 10 caracteres de la CURP
    return generarCURP(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, '').slice(0, 10);
}

// Función para actualizar los campos de CURP y RFC automáticamente
function actualizarCURPyRFC() {
    const nombre = document.getElementById("nombre").value;
    const apellidoPaterno = document.getElementById("apellido_paterno").value;
    const apellidoMaterno = document.getElementById("apellido_materno").value;
    const fechaNacimiento = document.getElementById("fecha_nacimiento").value;
    const estadoNacimiento = document.getElementById("estado_nacimiento").value;

    // Generar CURP y RFC
    const curp = generarCURP(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, estadoNacimiento);
    const rfc = generarRFC(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento);

    // Asignar los valores generados a los campos correspondientes en el formulario
    document.getElementById("curp").value = curp;
    document.getElementById("rfc").value = rfc;
}

// Función para mostrar la fecha y hora actual del sistema en el campo correspondiente
function mostrarFechaHoraYDatos() {
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString();
    const hora = ahora.toLocaleTimeString();
    document.getElementById('horaRegistro').value = `${fecha} ${hora}`;
}
