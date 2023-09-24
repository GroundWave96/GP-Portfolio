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

/* ======================================== Scroll Button ======================================== */

function myFunction() {
    const element = document.getElementById("myDIV");
    let scrollProgress = document.getElementById("progress");
    let y = element.scrollTop;

    if (y > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }

    let calcHeight =
        element.scrollHeight -
        element.clientHeight;
    let scrollValue = Math.round((y * 100) / calcHeight);

    scrollProgress.style.background = `conic-gradient(var(--main-color) ${scrollValue}%, var(--bright-color) ${scrollValue}%)`;
}

/* ======================================== Scroll Animation ======================================== */

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

/* ======================================== Tab ======================================== */

const tabs = document.querySelectorAll('.tab-btn');
const allContent = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(tab => {
            tab.classList.remove('active')
        });
        tab.classList.add('active');

        var line = document.querySelector('.line');

        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";
        line.style.display = "block";

        allContent.forEach(content => {
            content.classList.remove('active')
        });
        allContent[index].classList.add('active');
    })
})

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