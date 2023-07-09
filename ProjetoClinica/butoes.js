/**Parte Menu*/
const nav = document.querySelector(".nav");
const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");

function handleButtonClick(event) {
  if (event.type === "touchstart") event.preventDefault();
  event.stopPropagation();
  nav.classList.toggle("active");
  handleClickOutside(menu, () => {
    nav.classList.remove("active");
    setAria();
  });
  setAria();
}

function handleClickOutside(targetElement, callback) {
  const html = document.documentElement;
  function handleHTMLClick(event) {
    if (!targetElement.contains(event.target)) {
      targetElement.removeAttribute("data-target");
      html.removeEventListener("click", handleHTMLClick);
      html.removeEventListener("touchstart", handleHTMLClick);
      callback();
    }
  }
  if (!targetElement.hasAttribute("data-target")) {
    html.addEventListener("click", handleHTMLClick);
    html.addEventListener("touchstart", handleHTMLClick);
    targetElement.setAttribute("data-target", "");
  }
}

function setAria() {
  const isActive = nav.classList.contains("active");
  btnMenu.setAttribute("aria-expanded", isActive);
  if (isActive) {
    btnMenu.setAttribute("aria-label", "Fechar Menu");
  } else {
    btnMenu.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMenu.addEventListener("click", handleButtonClick);
btnMenu.addEventListener("touchstart", handleButtonClick);
/**Parte Slides */
var lastindex = 0;
var images = document.querySelectorAll('.container img');
var bullets = document.querySelectorAll('.bullet-single');

function changeSlide(index) {
    let lastImage = images[lastindex];
    let actualImage = images[index];
    let lastBullet = bullets[lastindex];
    let actualBullet = bullets[index];

    lastImage.style.display = 'none';
            actualImage.style.display = 'block';
            lastBullet.classList.remove('active-bullet');
            actualBullet.classList.add('active-bullet');

            lastindex = index;
        }

        function autoSlide() {
            var currentIndex = lastindex + 1;
            if (currentIndex >= images.length) {
                currentIndex = 0;
            }
            changeSlide(currentIndex);
        }

        var slideInterval = setInterval(autoSlide, 3000);

        bullets.forEach((bullet, index) => {
            bullet.addEventListener('click', () => {
                clearInterval(slideInterval);
                changeSlide(index);
                slideInterval = setInterval(autoSlide, 3000); // Reinicia o intervalo após a seleção manual do slide
            });
        });

/**************************************************************************************** */

/**Script do botão Voltar ao topo*/

const btn =document.getElementById("botao-topo")
btn.addEventListener("click", function(){
  window.scrollTo(0,0)
})

document.addEventListener('scroll', ocultar)

function ocultar(){
  if(window.scrollY > 20){
    btn.style.display = "flex"
  } else {
    btn.style.display = "none"
  }
}
ocultar()

/**************************************************************************************** */
/**Efeito de revelar os itens na página*/
window.sr = ScrollReveal({ reset:true })
sr.reveal('.area1', {duration: 2000}),
sr.reveal('.area2', {duration: 2000}),
sr.reveal('.area3', {duration: 2000}),
sr.reveal('.area4', {duration: 2000}),
sr.reveal('.area5', {duration: 2000})