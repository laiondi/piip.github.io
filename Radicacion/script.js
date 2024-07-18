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








    


  