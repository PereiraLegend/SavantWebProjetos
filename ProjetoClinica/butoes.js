/*Main - Principal */
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));
    
    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });
    
    items[currentItem].classList.add("current-item");
  });
});


function clickControl(isLeft) {
  if (isLeft) {
    currentItem -= 1;
  } else {
    currentItem += 1;
  }

  if (currentItem >= maxItems) {
    currentItem = 0;
  }

  if (currentItem < 0) {
    currentItem = maxItems - 1;
  }

  items.forEach((item) => item.classList.remove("current-item"));

  items[currentItem].scrollIntoView({
    behavior: "smooth",
    inline: "center"
  });

  items[currentItem].classList.add("current-item");
}

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    const isLeft = e.target.classList.contains("arrow-left");
    clickControl(isLeft);
  });
});

// Chama o clique automaticamente a cada 3 segundos
setInterval(() => {
  const isLeft = true; // Define a direção do clique (esquerda nesse caso)
  clickControl(isLeft);
}, 100000);

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