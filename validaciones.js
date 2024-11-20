// Función para validar el formulario
function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const identificacion = document.getElementById("identificacion").value;
    const curso = document.getElementById("curso").value;

    // Validación de campos vacíos
    if (!nombre || !correo || !identificacion || !curso) {
        alert("Por favor, completa todos los campos.");
        return false;
    }

    // Validación del correo
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }

    // Validación de longitud del número de identificación
    if (identificacion.length < 6) {
        alert("El número de identificación debe tener al menos 6 caracteres.");
        return false;
    }

    return true;
}

// Función para generar CURP a partir de los datos del formulario
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

    // Generar CURP sin homoclave
    return `${inicialPaterno}${primeraVocalInterna}${inicialMaterno}${inicialNombre}${año}${mes}${dia}${estado}`;
}

// Función para generar RFC reutilizando el formato de CURP
function generarRFC(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento) {
    return generarCURP(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, '').slice(0, 10);
}

// Función para actualizar automáticamente los campos de CURP y RFC
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

// Función para establecer la hora del sistema en el campo correspondiente
function establecerHora() {
    const ahora = new Date();
    const horaFormateada = ahora.getHours() + ':' + String(ahora.getMinutes()).padStart(2, '0');
    document.getElementById('horaRegistro').value = horaFormateada;
}

// Llama a la función establecerHora al cargar la página
window.onload = establecerHora;
