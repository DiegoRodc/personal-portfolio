const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {

    const button = dropdown.querySelector(".dropdown-toggle");

    button.addEventListener("click", (event) => {
        event.stopPropagation();

        // Close the other dropdowns
        dropdowns.forEach((otherDropdown) => {
            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove("open");

                otherDropdown
                    .querySelector(".dropdown-toggle")
                    .setAttribute("aria-expanded", "false");
            }
        });

        // Toggle the selected dropdown
        const isOpen = dropdown.classList.toggle("open");

        button.setAttribute("aria-expanded", isOpen);
    });

});

// Close dropdowns when clicking outside
document.addEventListener("click", () => {
    closeAllDropdowns();
});

// Close dropdowns when pressing Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeAllDropdowns();
    }
});

// Close dropdowns after selecting a link
document.querySelectorAll(".dropdown-menu a").forEach((link) => {
    link.addEventListener("click", closeAllDropdowns);
});

function closeAllDropdowns() {
    dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("open");

        dropdown
            .querySelector(".dropdown-toggle")
            .setAttribute("aria-expanded", "false");
    });
}