const { forEach } = require("async");

let isMobile = window.matchMedia("only screen and (max-width: 64em)").matches;

const stickySection = [...document.querySelectorAll('.sticky')];

window.addEventListener('scroll', (e) => {
    for(let i = 0; i < stickySection.length; i++) {
        if(!isMobile) {
            transform(stickySection[i]);
        } else {
            return;
        }
    }
});

function transform(section){
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.scroll-section');
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 300 ? 300 : percentage
    scrollSection.style.transform = 'translate3d(-' + percentage + 'vw, 0, 0)';
}




window.onmousemove = e => {
    if(!isMobile) {
        const mouseX = e.clientX;

        const tiles = document.querySelectorAll('.hover');

        for(const tile of tiles) {
            const dimensions = tile.getBoundingClientRect();

            const relativeMouseX = mouseX - dimensions.left;
            const relativeMouxeXAsDecimal = relativeMouseX / dimensions.width;

            const opacity = relativeMouxeXAsDecimal;
            const blur = 1 - relativeMouxeXAsDecimal;

            tile.style.setProperty('--opacity', opacity);
            tile.style.setProperty('--blur', blur);
        }
    } else {
        return;
    }
}

