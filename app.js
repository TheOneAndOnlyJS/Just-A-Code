const navSlide = () => {
    const navLinks = document.querySelectorAll('.nav-links li')
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active')
        // Animate Links
        navLinks.forEach((link, index) => {
        if(link.getElementsByClassName.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`
        }
    });

    //Burger Animation
    burger.classList.toggle('toggle')
    });
}

navSlide()