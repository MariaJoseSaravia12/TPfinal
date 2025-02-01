let contador = 0;

function iniciar() {
  
  let imagenes = document.querySelectorAll('#cajaimagenes img');
  const soltar1 = document.getElementById('cajasoltar1');
  const soltar2 = document.getElementById('cajasoltar2');
  const soltar3 = document.getElementById('cajasoltar3');
  const mensajes = document.getElementById('mensajes');

  // Ocultar el contenedor de mensajes al inicio
  mensajes.style.display = 'none';

  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('dragstart', arrastrado, false);
  }

  [soltar1, soltar2, soltar3].forEach((soltar) => {
    soltar.addEventListener('dragenter', (event) => event.preventDefault(), false);
    soltar.addEventListener('dragover', (event) => event.preventDefault(), false);
    soltar.addEventListener('drop', soltado, false);
  });
}

function arrastrado(event) {
  const elemento = event.target;
  event.dataTransfer.setData('Text', elemento.getAttribute('id'));
};

async function soltado(event) {
  event.preventDefault();
  const mensajes = document.getElementById('mensajes');
  const id = event.dataTransfer.getData('Text');
  const imagen = document.getElementById(id);

   // Mostrar el contenedor de mensajes y limpiar contenido previo
  mensajes.innerHTML = ''; 
  mensajes.style.display = 'none';
  // Validar si la imagen corresponde al lugar correcto
  if (
    (id === 'imagen1' && event.target.id === 'cajasoltar2') ||
    (id === 'imagen2' && event.target.id === 'cajasoltar1') ||
    (id === 'imagen3' && event.target.id === 'cajasoltar3')
  ) {
    // Agregar la imagen al lugar correcto
    imagen.style.display = 'none';
    event.target.innerHTML = `<img src="${imagen.src}" height="400px" width="275px">`;
    contador++;
    mensajes.style.display = 'none';
   
    if (contador === 3) {
      mensajes.innerHTML = `<p class="item-link exito">¡Felicidades! Has completado el rompecabezas.</p>`;
      mensajes.style.display = 'flex'; 

      // Hacer visible el canvas y dibujar
      let canvas = document.getElementById("lienzo");
      if (canvas) {
        canvas.style.display = "block"; 
        let lienzo = canvas.getContext("2d");        
        dibujarCanvas(lienzo); 
      } else {
        mensajes.style.display = 'none'; // Asegurarse de ocultar cuando no hay mensaje
      }
    }
  } else {
    // Mostrar mensaje de error si la pieza no es correcta
    mensajes.innerHTML = `<p class="item-link error">Esta pieza no corresponde a este lugar.</p>`;
    mensajes.style.display = 'flex';
    
   
  }
};
//LocalStorage
let contadorPuntos;
let cantidad=localStorage.getItem("cantidad");


if(cantidad == null){
  contadorPuntos=0
}else{
  contadorPuntos=cantidad
}
document.querySelector("#cantidad").textContent=contadorPuntos;

const sumarPuntos=()=>{
  contadorPuntos++
  document.querySelector("#cantidad").textContent=contadorPuntos;
  localStorage.setItem("cantidad",contadorPuntos);
 
  };

function reinicio() {    
  const mensajes = document.getElementById('mensajes');
  if (mensajes) {
    mensajes.style.display = 'none';
    mensajes.innerHTML = ''; 
  } 
  sumarPuntos() 
  window.location.reload(); // Recarga la página para reiniciar el juego
};

iniciar();

//Micky mouse
let canvas=document.querySelector("canvas");
let lienzo=canvas.getContext("2d");

function dibujarCanvas(lienzo){


// --- Orejas ---
lienzo.beginPath();
lienzo.ellipse(110, 120, 80, 90, Math.PI / 90, 0, Math.PI * 2); // oreja izquierdo
lienzo.ellipse(370, 120, 80, 90, -Math.PI / 90, 0, Math.PI * 2); // oreja derecho
lienzo.fillStyle = "black";
lienzo.fill();
lienzo.closePath();


// --- Cabeza ---
lienzo.beginPath();
lienzo.ellipse(240, 280, 130, 135, Math.PI / 90, 0, Math.PI * 2);//cabeza
lienzo.fillStyle = "black";
lienzo.fill();
lienzo.closePath();
//cara
lienzo.beginPath();
lienzo.ellipse(210, 260, 50, 90, Math.PI / 60, 0, Math.PI * 2); // Ojo izquierdo
lienzo.ellipse(280, 260, 50, 90, -Math.PI / 60, 0, Math.PI * 2); // Ojo derecho
lienzo.fillStyle = "#fcd9b6";
lienzo.fill();
lienzo.closePath();

// --- Ojos ---
// Parte blanca de los ojos
// Ojo izquierdo
lienzo.beginPath();
lienzo.fillStyle = "white";
lienzo.strokeStyle = "black";
lienzo.lineWidth = 4; 
lienzo.ellipse(220, 265, 15, 50, Math.PI / 90, 0, Math.PI * 2); 
lienzo.fillStyle = "white";
lienzo.stroke();
lienzo.fill();
lienzo.closePath();
//ojo derecho
lienzo.beginPath();
lienzo.fillStyle = "white";
lienzo.strokeStyle = "black";
lienzo.lineWidth = 4; 
lienzo.ellipse(270, 265, 15, 50, -Math.PI / 90, 0, Math.PI * 2); // Ojo derecho
lienzo.fillStyle = "white";
lienzo.stroke();
lienzo.fill();
lienzo.closePath();

// Pupilas
lienzo.beginPath();
lienzo.ellipse(223, 290, 10, 20, Math.PI / 90, 0, Math.PI * 2); // pupila izquierdo
lienzo.ellipse(267, 290, 10, 20, -Math.PI / 90, 0, Math.PI * 2); // pupila derecho
lienzo.fillStyle = "black";
lienzo.fill();
lienzo.closePath();
//arco debajo de los ojos

lienzo.beginPath();
lienzo.ellipse(250, 330, 60, 20, 0, Math.PI + Math.PI / 6, 0 * Math.PI - Math.PI / 4, false); 
lienzo.fillStyle = "#fcd9b6"; 
lienzo.fill(); 
lienzo.strokeStyle = "black"; 
lienzo.lineWidth = 2; 
lienzo.stroke(); 

//parte de abajo de la cara
lienzo.beginPath();
lienzo.ellipse(246, 367, 120, 50, Math.PI / 100, 0, Math.PI * 2); 
lienzo.ellipse(246, 400, 40, 30, Math.PI / 100, 0, Math.PI * 2); 
lienzo.strokeStyle= 
lienzo.fillStyle = "#fcd9b6";
lienzo.fill();
lienzo.closePath();
//menton


// --- Nariz ---

lienzo.beginPath();
lienzo.ellipse(246, 350, 35, 20, Math.PI / 50, 0, Math.PI * 2); 
lienzo.fillStyle = "black";
lienzo.fill();
lienzo.closePath();

//boca

// sonrisa
lienzo.beginPath();
lienzo.arc(250, 369, 40, 0.2 * Math.PI, 0.8 * Math.PI ); 
lienzo.fillStyle = "#8A0707"; 
lienzo.strokeStyle ="black"
lienzo.lineWidth = 2; 
lienzo.fill();
lienzo.stroke();

lienzo.beginPath();
lienzo.arc(250, 295, 100, 0.2 * Math.PI, 0.8 * Math.PI); 
lienzo.strokeStyle = "black"; 
lienzo.lineWidth = 3; 
lienzo.stroke();


//comisuras

//comisura izquierda
lienzo.beginPath();
lienzo.arc(180, 365, 15, 1.5 * Math.PI, 0.8 * Math.PI, true); 
lienzo.strokeStyle = "black";
lienzo.lineWidth = 3;
lienzo.stroke();

//comisura derecha 
lienzo.beginPath();
lienzo.arc(322, 362, 11, 1.5 * Math.PI, 0.3 * Math.PI, false);
lienzo.stroke();
};
