let video = document.querySelectorAll('video')[0];
let intervalo;

const transformarTiempo = (tiempo) => {
    if (tiempo < 60) {
        return "00:" + tiempo.toFixed(0).padStart(2, '0');
    } else {
        let minutos = Math.floor(tiempo / 60);
        let segundos = Math.floor(tiempo % 60);
        return minutos.toString().padStart(2, '0') + ":" + segundos.toString().padStart(2, '0');
    }
};

const actualizarTiempo = (selector, tiempo) => {
    let elemento = document.querySelector(selector);
    if (elemento) elemento.innerText = transformarTiempo(tiempo);
};

const mostrar = () => {
    if (video) actualizarTiempo("#duracion", video.duration);
};

const mostrarTiempoActual = () => {
    if (video) actualizarTiempo("#actual", video.currentTime);
};

const reproducir = () => {
    if (video) {
        video.play();
        // Mostrar el tiempo actual al reproducir
        document.getElementById("mostrarTiempoActual").style.display = "block";
        intervalo = setInterval(mostrarTiempoActual, 1000);
    }
};

const pausar = () => {
    if (video) {
        video.pause();
        if (intervalo) clearInterval(intervalo);
        
    }
};
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
      }
  }
};



if (video) {
    video.addEventListener("loadedmetadata", mostrar);
}
