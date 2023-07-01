const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('menu')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

const dropdownButton = document.getElementsByClassName('dropdown-button')[0];
const dropdownMenu = document.getElementsByClassName('dropdown-menu')[0];

dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});