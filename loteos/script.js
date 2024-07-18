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

/* SCRIPT MODAL AGRANDAR IMAGEN */



// Función para abrir el modal con la imagen
function openModal(imagePath) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('img01');
    var closeBtn = document.getElementsByClassName("close")[0];

    modal.style.display = "block"; // Mostrar el modal
    modalImg.src = imagePath; // Establecer la imagen seleccionada en el modal

    // Centrar verticalmente la imagen
    var modalHeight = modal.offsetHeight;
    var imgHeight = modalImg.offsetHeight;
    var topMargin = (modalHeight - imgHeight) / 2;
    modalImg.style.marginTop = topMargin + "px";

    // Agregar evento al botón de cerrar
    closeBtn.onclick = function() {
        closeModal();
    };
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = "none"; // Ocultar el modal al cerrarlo
}

// Cerrar modal al hacer click fuera de la imagen
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        closeModal();
    }
}









    


  