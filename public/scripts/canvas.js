const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      console.log(canvas);
    }
  });
});

const canvas = document.querySelectorAll("canvas");
canvas.forEach((el) => observer.observe(el));