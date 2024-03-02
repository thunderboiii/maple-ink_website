const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('menu')[1];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

document.addEventListener('click', e=> {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return
    
    let currentDropdown
    if(isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if(dropdown === currentDropdown) return
        dropdown.classList.remove('active');
    });
}); 

const elScrollable = document.querySelector("html")
const elNav = document.querySelector("header");

const handleNav = () => {
  const viewportHeight = window.innerHeight / 2;
  const scrollTop = elScrollable.scrollTop;
  elNav.classList.toggle("ontop", scrollTop >= viewportHeight);
};

addEventListener("scroll", handleNav)
addEventListener("resize", handleNav)
handleNav();