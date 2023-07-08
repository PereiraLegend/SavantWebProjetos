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
