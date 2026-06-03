// ========================
// LOADER
// ========================
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "0.5s";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1000);
});


// ========================
// SCROLL TO TOP
// ========================
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ========================
// TYPING EFFECT (IMPROVED)
// ========================
const typingText = document.getElementById("typing-text");

const texts = [
    "Front-End Developer",
    "UI / UX Enthusiast",
    "Web Developer",
    "Python & Django Developer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const current = texts[textIndex];

    if (isDeleting) {
        typingText.textContent = current.substring(0, charIndex--);
    } else {
        typingText.textContent = current.substring(0, charIndex++);
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length) {
        speed = 1200;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex++;

        if (textIndex === texts.length) {
            textIndex = 0;
        }
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ========================
// SMOOTH SCROLL FOR LINKS
// ========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ========================
// NAVBAR EFFECT ON SCROLL
// ========================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,0,0,0.6)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,245,212,0.1)";
    } else {
        navbar.style.background = "rgba(0,0,0,0.2)";
        navbar.style.boxShadow = "none";
    }
});
