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
}, 5000);
