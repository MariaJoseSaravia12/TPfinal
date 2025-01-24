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
}

async function soltado(event) {
  event.preventDefault();
  const mensajes = document.getElementById('mensajes');
  const id = event.dataTransfer.getData('Text');
  const imagen = document.getElementById(id);

  // Mostrar el contenedor de mensajes y limpiar contenido previo
  mensajes.style.display = 'flex'; // Cambiar a flex para centrar
  mensajes.innerHTML = ''; // Limpiar mensajes previos

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

    // Comprobar si se completó el rompecabezas
    if (contador === 3) {
      mensajes.innerHTML = `<p class="item-link exito" >¡Felicidades! Has completado el rompecabezas.</p>`;
      mensajes.style.display = 'flex'; // Mostrar mensaje final
    } else {
      mensajes.style.display = 'none'; // Asegurarse de ocultar cuando no hay mensaje
    }
  } else {
    // Mostrar mensaje de error si la pieza no es correcta
    mensajes.innerHTML = `<p class="item-link error">Esta pieza no corresponde a este lugar.</p>`;
    mensajes.style.display = 'flex';
  }
}

function reinicio() {
  const mensajes = document.getElementById('mensajes');
  mensajes.style.display = 'none'; // Ocultar el div mensajes
  mensajes.innerHTML = ''; // Limpiar contenido del mensaje
  window.location.reload();
}

iniciar();
