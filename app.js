const btnMobile = document.getElementById("menu-mobile-btn");

function toggleMenu(event) {
    if (event.type == 'touchstart') event.preventDefault();
    const nav = document.getElementById("menu");
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);