'use strict';

/* ChatGPT a été utilisé pour la création de ces scripts */

// Slider
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const sliderContainer = document.querySelector(".slider-container");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let index = 0;

    function showSlide(i) {
        slides.forEach((slide) => {
            slide.classList.remove("active");
            slide.style.display = "none"; // Cache tous les slides
        });

        slides[i].classList.add("active");
        slides[i].style.display = "block"; // Affiche le slide actif

        // Ajuste dynamiquement la hauteur de .slider-container
        sliderContainer.style.height = `${slides[i].offsetHeight}px`;
    }

    nextBtn.addEventListener("click", function () {
        index = (index + 1) % slides.length;
        showSlide(index);
    });

    prevBtn.addEventListener("click", function () {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    });

    // Initialisation avec la bonne hauteur
    showSlide(index);

    // Correction : Forcer un premier changement de slide pour stabiliser l'affichage
    setTimeout(() => {
        index = (index + 1) % slides.length;
        showSlide(index);
    }, 300);

    // Correction : Forcer une mise à jour du slider après redimensionnement de la fenêtre
    window.addEventListener("resize", () => {
        showSlide(index);
    });
});

// après initiation carrousel
document.addEventListener("DOMContentLoaded", function () {
    const sliderControls = document.querySelector(".slider-controls");
    const slider = document.querySelector(".slider");

    if (slider && sliderControls) {
        slider.appendChild(sliderControls);
    }
});




/* Ajout d'interactivité de scroll */
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    let lastScrollTop = window.scrollY;

    sections.forEach((section) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    window.addEventListener("scroll", function () {
        let currentScroll = window.scrollY;
        let scrollingDown = currentScroll > lastScrollTop;

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();

            if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
                // Apparition de la section tant qu'elle est visible
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            } 

            // Réinitialisation quand la section est complètement hors du viewport
            if (scrollingDown && rect.top > window.innerHeight) {
                section.style.opacity = "0";
                section.style.transform = "translateY(20px)";
            } 
            else if (!scrollingDown && rect.bottom < 0) {
                section.style.opacity = "0";
                section.style.transform = "translateY(20px)";
            }
        });

        lastScrollTop = currentScroll;
    });
});



/* Burger menu */
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".icon-nav");
    const anchorNav = document.querySelector(".anchor-navigation");

    menuIcon.addEventListener("click", () => {
        anchorNav.classList.toggle("active"); // Ajoute ou enlève la classe active
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section, header, footer');
    const navLinks = document.querySelectorAll('.anchor-navigation__el a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 50) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});



// Gestion du mode sombre/claire.
const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle("dark-mode");

    const newTheme = body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
};

// Appliquer le bon mode dès le chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
});

const darkModeBtn = document.querySelector(".btn--darkmode");
if (darkModeBtn) {
    darkModeBtn.addEventListener("click", toggleDarkMode);
}



/* Utilitaires */
// Function getRandom
/*
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/

// fetch sans variable
/*
fetch('assets/data/file.txt')
    .then(function (response) {
        // code
        console.log(response);
        return response.text();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function () {
        console.log('erroooorrr');
    });
*/

// Déclaration globale de l'index pour pouvoir le modifier partout
/* let index = 0;

// Fonction pour afficher le bon slide et ajuster la hauteur
function showSlide(i) {
    const slides = document.querySelectorAll(".slide");
    const sliderContainer = document.querySelector(".slider-container");

    if (slides.length > 0) {
        slides.forEach((slide, index) => {
            slide.classList.remove("active");
            slide.style.opacity = "0"; // Cache tous les slides
            slide.style.zIndex = "0"; // Assure que les slides cachés passent en arrière-plan
            slide.style.display = "none"; // Évite les erreurs d'affichage
        });

        slides[i].classList.add("active");
        slides[i].style.opacity = "1"; // Affiche le slide actif
        slides[i].style.zIndex = "10"; // Le met au premier plan
        slides[i].style.display = "block"; // Le rend visible

        // Mise à jour de la hauteur du conteneur
        if (sliderContainer) {
            sliderContainer.style.height = `${slides[i].offsetHeight}px`;
        }
    }
}
*/