// Log message to console
console.log("Welcome to our cafe!");

// Smooth scroll functionality for nav links
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});
