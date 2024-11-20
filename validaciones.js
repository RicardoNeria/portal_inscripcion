// Función para autogenerar CURP a partir de los datos
function generarCURP(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, estadoNacimiento) {
    const inicialPaterno = apellidoPaterno.charAt(0).toUpperCase();
    const primeraVocalInterna = apellidoPaterno.slice(1).match(/[AEIOU]/i) ? apellidoPaterno.slice(1).match(/[AEIOU]/i)[0].toUpperCase() : '';
    const inicialMaterno = apellidoMaterno.charAt(0).toUpperCase();
    const inicialNombre = nombre.charAt(0).toUpperCase();
    const fecha = fechaNacimiento.split('-'); // Formato YYYY-MM-DD
    const año = fecha[0].slice(2);
    const mes = fecha[1];
    const dia = fecha[2];
    const estado = estadoNacimiento.toUpperCase();

    return `${inicialPaterno}${primeraVocalInterna}${inicialMaterno}${inicialNombre}${año}${mes}${dia}${estado}`;
}

function generarRFC(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento) {
    return generarCURP(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, '').slice(0, 10);
}

function actualizarCURPyRFC() {
    const nombre = document.getElementById("nombre").value;
    const apellidoPaterno = document.getElementById("apellido_paterno").value;
    const apellidoMaterno = document.getElementById("apellido_materno").value;
    const fechaNacimiento = document.getElementById("fecha_nacimiento").value;
    const estadoNacimiento = document.getElementById("estado_nacimiento").value;

    const curp = generarCURP(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, estadoNacimiento);
    const rfc = generarRFC(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento);

    document.getElementById("curp").value = curp;
    document.getElementById("rfc").value = rfc;
}

function mostrarFechaHoraYDatos() {
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString();
    const hora = ahora.toLocaleTimeString();
    document.getElementById('horaRegistro').value = `${fecha} ${hora}`;
}
