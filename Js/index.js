//nav, header y footer
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  
  const footer = document.querySelector('footer');

  const navContent = `
    <ul class="menu">`+
      `<li class="item-menu">`+
        `<a href="./historia.html" class="item-link">HISTORIA</a>`+
      `</li>`+
      `<li class="item-menu">`+
        `<a href="./juguemos.html" class="item-link">JUGUEMOS</a>`+
      `</li>`+
    `</ul>
  `;

 

  const footerContent = `
    <div class="footer-left">
      <img class="logo" src="./assets/img/logo.png" alt="logo">
      <h3 class="titulo-blanco titulo-foot">PROGRAMACIÓN<br>E<br>HISTORIA</h3>
    </div>
    <div>Sitio con fines educativos - Creado por M.Victoria Lopez</div>
  `;
  nav.innerHTML = navContent;
  
  footer.innerHTML = footerContent;
});


