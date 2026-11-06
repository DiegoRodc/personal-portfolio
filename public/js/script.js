
/* =========================
   DROPDOWN NAVIGATION
========================= */

const dropdowns = document.querySelectorAll(".dropdown");

const isTouchDevice = window.matchMedia("(hover: none)").matches;


/* Mobile: open and close dropdowns with taps */

dropdowns.forEach((dropdown) => {

    const button = dropdown.querySelector(".dropdown-toggle");

    button.addEventListener("click", (event) => {

        if (!isTouchDevice) {
            return;
        }

        event.stopPropagation();

        const isOpen = dropdown.classList.contains("open");

        closeAllDropdowns();

        if (!isOpen) {
            dropdown.classList.add("open");
            button.setAttribute("aria-expanded", "true");
        }

    });

});


/* Close all dropdowns */

function closeAllDropdowns() {

    dropdowns.forEach((dropdown) => {

        dropdown.classList.remove("open");

        dropdown
            .querySelector(".dropdown-toggle")
            .setAttribute("aria-expanded", "false");

    });

}


/* Close dropdowns when clicking outside */

document.addEventListener("click", (event) => {

    if (!event.target.closest(".dropdown")) {
        closeAllDropdowns();
    }

});


/* Close dropdowns when pressing Escape */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeAllDropdowns();
    }

});


/* Close dropdowns after selecting a link */

document.querySelectorAll(".dropdown-menu a").forEach((link) => {

    link.addEventListener("click", () => {
        closeAllDropdowns();
    });

});


/* =========================
   HEADER SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");


function updateNavbar() {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}


/* Detect scrolling */

window.addEventListener("scroll", updateNavbar, {
    passive: true
});


/* Check initial position when page loads */

updateNavbar();