//  Função Menu Mobile

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
  }
  
  // Fecha o menu se clicar fora
  document.addEventListener('click', function(event) {
    const menu = document.querySelector('.menu');
    const toggle = document.querySelector('.menu-toggle');
  
    const clickMenu = menu.contains(event.target);
    const clickMenuToggle = toggle.contains(event.target);
  
    // Se o clique não for no menu nem no botão, fecha
    if (!clickMenu && !clickMenuToggle) {
      menu.classList.remove('show');
    }
});

// FUNCAO LIGHTBOX 
function openLightbox(imgSrc) {
    const lightbox = document.getElementById('lightbox');
    const expandedImg = document.getElementById('expanded-img');
    expandedImg.src = imgSrc; // Altera a imagem expandida
    lightbox.style.display = 'flex'; // Exibe o lightbox
  }
  
  // Função para fechar a lightbox
  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Fecha o lightbox
  }
  
  // Adicionando o evento de clique para abrir a imagem expandida
  document.querySelectorAll('.img-port').forEach((imgElement) => {
    imgElement.addEventListener('click', function () {
      const imgSrc = imgElement.style.backgroundImage.slice(5, -2); // Pega o link da imagem
      openLightbox(imgSrc);
    });
  });
  
  // Fechar a lightbox quando o botão de fechar for clicado
  document.getElementById('close-lightbox').addEventListener('click', closeLightbox);