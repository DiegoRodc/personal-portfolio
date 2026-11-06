const dropdowns = document.querySelectorAll(".dropdown");

const isTouchDevice = window.matchMedia("(hover: none)").matches;


/* =========================
   DROPDOWN BEHAVIOR
========================= */

dropdowns.forEach((dropdown) => {

    const button = dropdown.querySelector(".dropdown-toggle");

    // Desktop: open dropdown when hovering
    dropdown.addEventListener("mouseenter", () => {
        if (!isTouchDevice) {
            dropdown.classList.add("open");
            button.setAttribute("aria-expanded", "true");
        }
    });

    // Desktop: close dropdown when leaving
    dropdown.addEventListener("mouseleave", () => {
        if (!isTouchDevice) {
            dropdown.classList.remove("open");
            button.setAttribute("aria-expanded", "false");
        }
    });

    // Mobile: open and close dropdown when tapping
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


/* =========================
   CLOSE ALL DROPDOWNS
========================= */

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