// Fonction pour naviguer vers la section
function scrollToSection(id) {
    var elem = document.getElementById(id);
    var elemHeight = elem.offsetHeight;
    var viewportHeight = window.innerHeight;
    var offsetTop = elem.offsetTop;
    var centerElem = offsetTop + (elemHeight / 2);
    var scrollToPosition = centerElem - (viewportHeight / 2);

    window.scroll({
        top: scrollToPosition,
        behavior: 'smooth'
    });
}

// Gestion de la navbar
const navbar = document.querySelector(".header-navbar");
const logoButton = document.getElementById("section0");
const leftButtons = navbar.querySelectorAll(":nth-child(-n+3)");
const rightButtons = navbar.querySelectorAll(":nth-child(n+5)");

function showButtons() {
    leftButtons.forEach(btn => {
        btn.style.transform = "translateX(0) scaleX(1)";
        btn.style.opacity = "1";
    });
    rightButtons.forEach(btn => {
        btn.style.transform = "translateX(0) scaleX(1)";
        btn.style.opacity = "1";
    });
}

function hideButtons() {
    leftButtons.forEach(btn => {
        btn.style.transform = "translateX(100%) scaleX(0)";
        btn.style.opacity = "0";
    });
    rightButtons.forEach(btn => {
        btn.style.transform = "translateX(-100%) scaleX(0)";
        btn.style.opacity = "0";
    });
}

navbar.addEventListener("mouseleave", function() {
    if (window.scrollY > window.innerHeight) {
        hideButtons();
    }
});

window.addEventListener("scroll", () => {
    if (window.scrollY <= window.innerHeight) {
        showButtons();
    } else {
        hideButtons();
    }
});

logoButton.addEventListener("mouseover", function() {
    if (window.scrollY > window.innerHeight) {
        showButtons();
    }
});

// Écouteur d'événements pour le clic sur le logo
document.querySelector("#section0").addEventListener("click", function() {
    window.location.href = "#"; // Cette ligne naviguera vers le haut de la page
});
