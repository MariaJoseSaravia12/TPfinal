//nav, header y footer
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');

  const footer = document.querySelector('footer');

  // Contenido completo del <nav>, incluyendo el SVG y el menú
  const navContent = `
    <a href="./index.html">
      <svg width="200" height="90">
        <!-- Monitor Externo -->
        <rect x="45" y="5" width="80" height="50" class="momento1" fill="#767a81de" stroke="#2F3645" stroke-width="2"></rect>
        
        <!-- Pantalla -->
        <rect x="50" y="10" width="70" height="40" class="momento2" fill="#000000" stroke="#2F3645" stroke-width="2"></rect>
    
        <!-- Base -->
        <rect x="75" y="55" width="20" height="10" class="momento1" fill="#767a81de" stroke="#2F3645" stroke-width="2"></rect>
    
        <!-- Soporte Base -->
        <polygon points="50 70,120 70 ,130 80,40 80" fill="#767a81de" stroke="#2F3645" stroke-width="2" class="momento1"></polygon>
        <polygon points="55 72,115 72  ,122 78,48 78" fill="#000000" class="momento2" stroke="#2F3645"></polygon>
    
        <!-- Código en la pantalla -->
        <line x1="55" y1="19" x2="100" y2="19" stroke="transparent" stroke-width="3" class="codigo"></line>
        <line x1="55" y1="24" x2="100" y2="24" stroke="transparent" stroke-width="3" class="codigo"></line>
        <line x1="55" y1="29" x2="70" y2="29" stroke="transparent" stroke-width="3" class="codigo"></line>
        <line x1="55" y1="33" x2="115" y2="33" stroke="transparent" stroke-width="3" class="codigo"></line>
        <line x1="55" y1="38" x2="115" y2="38" stroke="transparent" stroke-width="3" class="codigo"></line>
      </svg>
    </a>
    <ul class="menu">
      <li class="item-menu">
        <a href="./historia.html" class="item-link">HISTORIA</a>
      </li>
      <li class="item-menu">
        <a href="./juguemos.html" class="item-link">JUGUEMOS</a>
      </li>      
    </ul>    
    <ul class="tema">
        <li class="item-menu">
            <button class="item-icono" id="day" onclick="temaDia()"><span ><i class="fa-regular fa-sun"></i></span></button>
        </li>
        <li class="item-menu">
            <button class="item-icono" id="night" onclick="temaNoche()"><span><i class="fa-regular fa-moon"></i></span></button>
        </li>
    </ul>     
  `;

  // Contenido del <footer>
  const footerContent = `
    <div class="footer-left">
         <!-- Cubo 3D dentro del footer -->
  <div id="footer-cube-container">
    <div id="cubo">
      
      <div class="cara enfrente"></div>
      <div class="cara atras"></div>
      <div class="cara arriba"></div>
      <div class="cara abajo"></div>
      <div class="cara izquierda"></div>
      <div class="cara derecha"></div>
    </div>
    <div id="sombra"></div>
  </div>
      <h3 class="titulo-blanco titulo-foot">PROGRAMACIÓN<br>E<br>HISTORIA</h3>
    </div>
    <div>Sitio con fines educativos - Creado por M.Victoria Lopez</div>
   
  `;

  //Agregar contenido dinámicamente al nav y footer
  if (nav) nav.innerHTML = navContent;

  if (footer) footer.innerHTML = footerContent;
  window.onscroll = mostrarNav;
});


const mostrarNav=()=>{
  console.dir(window.scrollY)   // px que se traslada verticalmente
  console.dir(window.innerHeight)// alto de pantalla
  
  if(window.innerHeight*0.35 <window.scrollY){
      document.querySelector("nav").classList.add("nuevoNav")
  }else{
      document.querySelector("nav").classList.remove("nuevoNav")

  };
};
//localStorage
let infoTema = localStorage.getItem("tema");

if (infoTema === "noche") {
  document.body.classList.add("fondo");
  document.querySelectorAll(".card").forEach(elemento => elemento.classList.add("fondo"));
}

const temaNoche = () => {
  document.body.classList.add("fondo");
  document.querySelectorAll(".card").forEach(elemento => elemento.classList.add("fondo"));
  localStorage.setItem("tema", "noche");
};

const temaDia = () => {
  document.body.classList.remove("fondo");
  document.querySelectorAll(".card").forEach(elemento => elemento.classList.remove("fondo"));
  localStorage.setItem("tema", "dia");
};
