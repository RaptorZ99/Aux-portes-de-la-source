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
const leftButtons = Array.from(navbar.children).slice(0, 3); // Prend les trois premiers enfants
const rightButtons = Array.from(navbar.children).slice(-3); // Prend les trois derniers enfants

// ... Votre code JavaScript existant ...

function hideButtons() {
    leftButtons.forEach(btn => {
        btn.classList.add('disperse');
    });
    rightButtons.forEach(btn => {
        btn.classList.add('disperse');
    });
}

function showButtons() {
    leftButtons.forEach(btn => {
        btn.classList.remove('disperse');
    });
    rightButtons.forEach(btn => {
        btn.classList.remove('disperse');
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
