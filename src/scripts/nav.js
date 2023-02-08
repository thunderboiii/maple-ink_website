const nav = document.querySelector('.menus');
const navToggle = document.querySelector("#mobile-nav-toggle");
const logo = document.querySelector(".logo_nav");
const sandwich = document.querySelector(".sandwich");

navToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');

    if(visibility === "false") {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        logo.classList.add("shrink");

    } else if (visibility === "true") {
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        logo.classList.remove("shrink");
    }

});