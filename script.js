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

/* EFECTO TIPEO */

document.addEventListener("DOMContentLoaded", function() {
    // Texto a mostrar con el efecto de tipeo
    var text = "Parque Industrial y de la Innovación Posadas";
    var index = 0;
    var typingSpeed = 40; // Velocidad de tipeo en milisegundos
    var isTypingFinished = false;

    // Función para agregar letras al título con efecto de tipeo
    function type() {
        if (index < text.length) {
            document.getElementById("typing-title").textContent += text.charAt(index);
            index++;
            setTimeout(type, typingSpeed);
        } else {
            isTypingFinished = true;
        }
    }

    // Inicia el efecto de tipeo
    type();

    // Reinicia el efecto de tipeo si la ventana cambia de tamaño
    window.addEventListener("resize", function() {
        // Si el tipeo ya está completo, vuelve a escribir el texto
        if (isTypingFinished) {
            document.getElementById("typing-title").textContent = "";
            index = 0;
            isTypingFinished = false;
            type();
        }
    });
});



/* CENTRA EL LINK DE RADICACION */

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // Verifica si el enlace tiene target="_blank"
            if (!this.hasAttribute('target') || this.getAttribute('target') !== '_blank') {
                e.preventDefault();
            }

            const targetId = this.getAttribute('href').substring(1); // Obtén el id del objetivo sin el #

            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                const offsetHeight = targetElement.offsetHeight;
                const windowHeight = window.innerHeight;
                const scrollPosition = offsetTop - ((windowHeight - offsetHeight) / 2);

                window.scrollTo({
                    top: scrollPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
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

/* SLIDER LOOP */

const brandsContainer = document.querySelector('.brand-track');
const brands = brandsContainer.querySelectorAll('img');

// Duplicar marcas para asegurar que siempre haya suficientes para el desplazamiento continuo
brands.forEach(brand => {
    const clone = brand.cloneNode(true);
    brandsContainer.appendChild(clone);
});



/* FUNCIONES POP UP */

    // Inicialización de AOS
    AOS.init();

    // Función para iniciar el contador
    function startCounter() {
        const counterElement = document.getElementById("company-counter");
        const targetNumber = 33; // Número objetivo del contador
        const increment = 1; // Incremento del contador
        const intervalTime = 40; // Tiempo en milisegundos entre incrementos

        let currentNumber = 0;
        counterElement.textContent = currentNumber;
        document.querySelector(".counter-container").style.display = "block";

        const interval = setInterval(() => {
            currentNumber += increment;
            counterElement.textContent = currentNumber;

            if (currentNumber >= targetNumber) {
                clearInterval(interval);
            }
        }, intervalTime);
    }

    // Función para redirigir a otra página dentro de la misma carpeta
    function goToPage() {
        window.location.href = 'Radicacion/radicacion.html'; // Reemplaza 'nombre_del_archivo.html' con el nombre de tu archivo
    }

    // Mostrar popup al cargar la página si no se ha mostrado antes
    window.onload = function() {
        if (!localStorage.getItem('popupShown')) {
            document.getElementById('popup').style.display = 'block';
            localStorage.setItem('popupShown', 'true');
        } else {
            startCounter();
        }
    }

    // Función para cerrar el popup y mostrar el contador
    function closePopup() {
        document.getElementById('popup').style.display = 'none';
        startCounter();
    }

    // Agrega el event listener para el popup close button
    document.querySelector(".close").addEventListener("click", closePopup);

    // Mostrar el contador después de que se cierra el popup si el usuario hace scroll
    document.addEventListener('scroll', function(event) {
        var popup = document.getElementById('popup');
        var popupContent = document.querySelector('.popup-content');
        
        if (popup.style.display === 'block' && !popupContent.contains(event.target)) {
            closePopup();
        }
    });


/* CAMBIA LA IMAGEN DE ODS EN DIF TAMAÑOS */

    document.addEventListener("DOMContentLoaded", function() {
        function updateImages() {
            var images = document.querySelectorAll(".ods-img");
            if (window.innerWidth <= 431) {
                images[0].src = "ods7-small.webp";
                images[1].src = "ods8-small.webp";
                images[2].src = "ods9-small.webp";
                images[3].src = "ods12-small.webp";
                images[4].src = "ods13-small.webp";
            } else if (window.innerWidth <= 1024) {
                images[0].src = "ods7-medium.webp";
                images[1].src = "ods8-medium.webp";
                images[2].src = "ods9-medium.webp";
                images[3].src = "ods12-medium.webp";
                images[4].src = "ods13-medium.webp";
            } else {
                images[0].src = "ods7.webp";
                images[1].src = "ods8.webp";
                images[2].src = "ods9.webp";
                images[3].src = "ods12.webp";
                images[4].src = "ods13.webp";
            }
        }

        window.addEventListener("resize", updateImages);
        updateImages(); // Inicializar en la carga de la página
    });

/* INICIO LATIDO CONTINUO */

    document.addEventListener("DOMContentLoaded", function() {
        var logoImages = document.querySelectorAll(".logo-container img");
    
        // Iniciar la animación de latido para cada imagen del logo
        logoImages.forEach(function(img) {
            img.style.animationPlayState = "running";
        });
    });

    


  