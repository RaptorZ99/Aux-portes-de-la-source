document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.header-navbar');
    const buttons = navbar.querySelectorAll('button');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            buttons.forEach(button => {
                button.classList.add("small-text");
            });
        } else {
            buttons.forEach(button => {
                button.classList.remove("small-text");
            });
        }
    });
    
});


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
