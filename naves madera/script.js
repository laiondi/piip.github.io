/* MENU HAMBURGUESA */

document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    hamburgerMenu.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });
});

/* MENU SE TRANSFORMA EN X AL ABRIR */

document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    hamburgerMenu.addEventListener("click", function() {
        hamburgerMenu.classList.toggle("active");
        navLinks.classList.toggle("active");
    });
});


/* DESAPARECE MENU */

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }
});



/* MOSTRAR Y OCULTAR BOTON PARA VOLVER A SUBIR */

document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top-btn');

    // Muestra el botón cuando se hace scroll hacia abajo
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) { // Ajusta esta cantidad según sea necesario
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Vuelve arriba suavemente cuando se hace clic en el botón
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});



// JavaScript para el carrusel de la sección

let currentSlide = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    const slideWidth = document.querySelector('.carousel-item').clientWidth;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    carousel.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

function toggleDescription(id) {
    const description = document.getElementById(id);
    if (description.style.display === 'none' || description.style.display === '') {
        description.style.display = 'block';
    } else {
        description.style.display = 'none';
    }
}

function openVideoModal(videoId) {
    const videoModal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
    videoModal.style.display = 'block';
}

function closeVideoModal() {
    const videoModal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    videoFrame.src = '';
    videoModal.style.display = 'none';
}

/* ver mas ver menos */

    document.addEventListener('DOMContentLoaded', function () {
        const toggleButton = document.querySelector('.toggle-button');
        const fullText = document.querySelector('.full-text');
        const previewText = document.querySelector('.preview-text');

        toggleButton.addEventListener('click', function () {
            if (fullText.style.display === 'none') {
                fullText.style.display = 'block';
                previewText.style.display = 'none';
                toggleButton.textContent = 'Ver menos';
            } else {
                fullText.style.display = 'none';
                previewText.style.display = 'block';
                toggleButton.textContent = 'Ver más';
            }
        });
    });









    


  