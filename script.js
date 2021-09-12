const mobileContainer = document.getElementById('mobile-container');
const btnMobile = document.getElementById('btn-mobile')


function toggleMenu(event){
  if(event.type === 'touchstart') event.preventDefault();

  const nav = document.getElementById('nav-list');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');

  btnMobile.setAttribute('aria-expanded',active);

  if(active){
    btnMobile.setAttribute('aria-label','Fechar Menu')
  }else{
    btnMobile.setAttribute('aria-label','Abrir Menu')
  } 
};


mobileContainer.addEventListener('click', toggleMenu);
mobileContainer.addEventListener('touchstart', toggleMenu);
