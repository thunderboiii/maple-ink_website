const languageBtn = document.getElementById("language-btn");
const languages = document.getElementById("languages");

let buttonHasBeenClicked = false;

languageBtn.addEventListener("click", () => {
    if(!buttonHasBeenClicked) {
        languages.style.display = "block";
        buttonHasBeenClicked = true;
    } else if (buttonHasBeenClicked) {
        languages.style.display = "none";
        buttonHasBeenClicked = false;
    }
    
    
});