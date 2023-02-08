const body = document.querySelector("body");
const darkModeToggle = body.querySelector(".toggle-switch");
const navSandwich = body.querySelector(".sandwich-img");
const navLogo = body.querySelector("#logo_nav_img");

let lightMode = localStorage.getItem('lightMode');

const enableLightMode = () => {
  //add class light to body
  body.classList.add('light');
  //navSandwich.setAttribute('src', 'img/sandwich_light.png');
  //navLogo.setAttribute('src', 'img/icons/final_icon_with_text_light.PNG');
  //update darkmode in localStorage
  localStorage.setItem('lightMode', 'enabled');

  console.log('light mode enabled');  
}

const disableLightMode = () => {
  //add class light to body
  body.classList.remove('light');
  navSandwich.setAttribute('src', 'img/sandwich_dark.png');
  navLogo.setAttribute('src', 'img/icons/final_icon_with_text.PNG');
  //update darkmode in localStorage
  localStorage.setItem('lightMode', null);

  console.log('light mode disabled');
}

if(lightMode === 'enabled') {
  enableLightMode();
}

darkModeToggle.addEventListener('click', () => {
  
  lightMode = localStorage.getItem('lightMode');
  if(lightMode !== 'enabled'){
    enableLightMode();
  } else {
    disableLightMode();
  }
});