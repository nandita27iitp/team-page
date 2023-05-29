/*// Setting up the Variables
var bars = document.getElementById("nav-action");
var nav = document.getElementById("nav");


//setting up the listener
bars.addEventListener("click", barClicked, false);


//setting up the clicked Effect
function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');
}

const navLinkEls = document.querySelectorAll('.navbar');
const windowPathname = window.location.pathname;


navLinkEls.forEach(navLinkEl => {
  if(navLinkEl.href.includes(windowPathname)) {
    navLinkEl.classList.add('active');
  }
}*/