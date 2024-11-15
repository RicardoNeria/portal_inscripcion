// Ruta: assets/js/carrusel.js

// Arreglo con las imágenes y descripciones del carrusel
const imagenes = [
    {src: "assets/images/Gaceta.webp", texto: "Gaceta de la UnADM"},
    {src: "assets/images/Club_virtual_de_lenguas.webp", texto: "Club Virtual de Lenguas"},
    {src: "assets/images/Miradas_UnADM.webp", texto: "Miradas UnADM"},
    {src: "assets/images/Publicaciones_360.webp", texto: "Publicaciones 360"},
    {src: "assets/images/Reforma_laboral.webp", texto: "Reforma Laboral"}
];

let indiceActual = 0; // Índice de la imagen actual en el carrusel
let intervaloCarrusel; // Variable para almacenar el intervalo del carrusel

// Función que inicia el carrusel y oculta el texto
function iniciarCarrusel() {
    ocultarTextos();  // Ocultar el texto descriptivo al cargar la página
    actualizarCarrusel();  // Mostrar la primera imagen del carrusel
    intervaloCarrusel = setInterval(avanzarCarrusel, 6000); // Cambiar la imagen cada 6 segundos
}

// Función que avanza a la siguiente imagen en el carrusel
function avanzarCarrusel() {
    indiceActual = (indiceActual + 1) % imagenes.length; // Avanzar al siguiente índice
    actualizarCarrusel();
}

// Función que retrocede a la imagen anterior en el carrusel
function anteriorImagen() {
    clearInterval(intervaloCarrusel); // Detener el cambio automático
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length; // Retroceder al índice anterior
    actualizarCarrusel();
    intervaloCarrusel = setInterval(avanzarCarrusel, 6000); // Reiniciar el intervalo
}

// Función que avanza a la siguiente imagen en el carrusel cuando el usuario hace clic en el botón "Siguiente"
function siguienteImagen() {
    clearInterval(intervaloCarrusel); // Detener el cambio automático
    avanzarCarrusel(); // Ir a la siguiente imagen
    intervaloCarrusel = setInterval(avanzarCarrusel, 6000); // Reiniciar el intervalo
}

// Función que actualiza la imagen y el texto en el carrusel
function actualizarCarrusel() {
    const imagen = document.getElementById("carousel-image");
    const texto = document.getElementById("carousel-text");

    // Cambiar la imagen y el texto al índice actual
    imagen.src = imagenes[indiceActual].src;
    imagen.alt = imagenes[indiceActual].texto;
    texto.textContent = imagenes[indiceActual].texto;
}

// Función que oculta el texto descriptivo al cargar la página
function ocultarTextos() {
    document.getElementById("carousel-text").classList.add("hidden");
}

// Función que agranda la imagen cuando el cursor está sobre ella
function agrandarImagen(imagen) {
    imagen.style.transform = "scale(2)"; // Duplicar el tamaño de la imagen
}

// Función que reduce la imagen a su tamaño original cuando se retira el cursor
function reducirImagen(imagen) {
    imagen.style.transform = "scale(1)"; // Tamaño original
}

// Función que muestra el texto descriptivo al hacer clic en la imagen
function mostrarTexto() {
    const texto = document.getElementById("carousel-text");
    texto.classList.toggle("hidden"); // Alterna la visibilidad del texto
}
