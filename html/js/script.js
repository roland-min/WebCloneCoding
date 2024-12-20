// JavaScript file for header interactions

document.addEventListener("DOMContentLoaded", () => {
    console.log("Header loaded successfully.");

    // Example: Adding click event to menu items
    const menuLinks = document.querySelectorAll(".header .menu a");
    menuLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            alert(`You clicked on ${link.textContent}`);
        });
    });
});
