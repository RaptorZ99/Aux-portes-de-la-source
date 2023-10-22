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
