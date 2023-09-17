/* ----------Menu---------- */

const btnMobile = document.getElementById("menu-mobile-btn");

function toggleMenu(event) {
    if (event.type == 'touchstart') event.preventDefault();
    const nav = document.getElementById("menu");
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

/* ----------Scroll-animation---------- */

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))

/* ----------a---------- */
/* ----------a---------- */