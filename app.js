/* ======================================== Menu ======================================== */

const btnMobile = document.getElementById("menu-mobile-btn");
const menuListBtns = document.querySelectorAll(".menu-list-btn");

function toggleMenu(event) {
    if (event.type == 'touchstart') event.preventDefault();
    const nav = document.getElementById("menu");
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

menuListBtns.forEach(btn => {
    btn.addEventListener('click', toggleMenu);
});

/* ======================================== Scroll-animation ======================================== */

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

/* ======================================== Swiper ======================================== */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });