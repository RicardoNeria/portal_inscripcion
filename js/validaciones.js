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
