let video = document.querySelectorAll('video')[0];
let intervalo;

//Función corregida para formatear el tiempo correctamente
let transformarTiempo = (tiempo) => {
    let minutos = Math.floor(tiempo / 60);
    let segundos = Math.floor(tiempo % 60);

    // Formato "00:00", asegurando siempre dos dígitos en minutos y segundos
    return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
};

//Función para actualizar el tiempo en el DOM
const actualizarTiempo = (selector, tiempo) => {
    let elemento = document.querySelector(selector);
    if (elemento) elemento.innerText = transformarTiempo(tiempo);
};

//Mostrar la duración del video cuando carga
const mostrar = () => {
    if (video) actualizarTiempo("#duracion", video.duration);
};

//Actualizar tiempo actual mientras se reproduce
const mostrarTiempoActual = () => {
    if (video) actualizarTiempo("#actual", video.currentTime);
};

// Función para reproducir el video
const reproducir = () => {
    if (video) {
        video.play();

        // Ocultar la duración y mostrar el tiempo actual
        document.getElementById("duracion").parentElement.style.display = "none";
        document.getElementById("mostrarTiempoActual").style.display = "block";

        // Iniciar actualización del tiempo actual
        intervalo = setInterval(mostrarTiempoActual, 1000);
    }
};

// Función para pausar el video
const pausar = () => {
    if (video) {
        video.pause();
    if (intervalo) clearInterval(intervalo);
    };
};

//Función para silenciar o activar sonido
const mutear = () => {
    if (video) {
        video.muted = !video.muted; 
        let iconMute = document.getElementById("iconMute");
        let iconUnmute = document.getElementById("iconUnmute");

        if (video.muted) {
            iconMute.style.display = "inline"; 
            iconUnmute.style.display = "none"; 
        } else {
            iconMute.style.display = "none"; 
            iconUnmute.style.display = "inline"; 
        };
    };
};

//Event Listener
if (video) {
    video.addEventListener("loadedmetadata", mostrar);
};
