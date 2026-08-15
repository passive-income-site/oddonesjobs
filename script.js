// ================================
// MOBILE MENU
// ================================

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("nav");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("active");
    });
}


// ================================
// CLOSE MOBILE MENU AFTER CLICK
// ================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navigation) {
            navigation.classList.remove("active");
        }
    });
});


// ================================
// SMOOTH SCROLLING
// ================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ================================
// BUTTON MESSAGE
// ================================

function showMessage(message) {
    alert(message);
}


// ================================
// CURRENT YEAR
// ================================

const yearElement = document.querySelector("#current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
