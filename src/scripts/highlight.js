const header = document.querySelector("header");
const header_toggle = body.querySelector(".header_toggle");

      header_toggle.addEventListener("click", ()=>{
        header.classList.toggle("show");
      });

const footer = document.querySelector("footer");
const footer_toggle = body.querySelector(".footer_toggle");

      footer_toggle.addEventListener("click", ()=>{
        footer.classList.toggle("show");
      });