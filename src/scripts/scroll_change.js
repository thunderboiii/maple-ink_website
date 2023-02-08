const ul = document.getElementsByClassName("navigation");

window.onscroll = function() {changeOnScroll()};

function changeOnScroll() {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        ul.classList.add("onscroll");
    } else {
        ul.classList.remove("onscroll");
    }
}
