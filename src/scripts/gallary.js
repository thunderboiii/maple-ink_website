const gallaryWindwo = document.querySelector('.portfolio-sw_gallary');
const gallary = document.querySelector('.pin-container');
const bigImage = document.getElementById("bigImage");

gallary.addEventListener('click', (e) => {
    const activeImage = e.target.closest('.card');
    if(!activeImage) return;
    toggleImage(activeImage);
});

function toggleImage(imageToDisplay) {
    var imageToDisplaySrc = imageToDisplay.firstChild.src;
    
    bigImage.src = imageToDisplaySrc;
    bigImage.style.display = "block";
    
}