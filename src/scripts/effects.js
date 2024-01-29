document.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".move").forEach(function(move) {
        var movingValue = move.getAttribute("data-value");
        var x = (e.clientX * movingValue) / 250;
        var y = (e.clientY * movingValue) / 250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
});

var mouseCircle = document.getElementById("take-a-look");
var hideTimeout;

function updateMouseCircle(event) {
    // Set the position of the mouse circle based on the mouse coordinates
    mouseCircle.style.left = (event.pageX - 50) + "px";
    mouseCircle.style.top = (event.pageY - 50) + "px";

    // Clear any previous timeout
    clearTimeout(hideTimeout);

    // Check if the element under the mouse has the class "look-link"
    var elementUnderMouse = document.elementFromPoint(event.clientX, event.clientY);
    if (elementUnderMouse && elementUnderMouse.classList.contains("look-link")) {
      // If the element has the class, make the mouseCircle visible
      mouseCircle.style.display = "block";
    } else {
      // If the element does not have the class, hide the mouseCircle after a short delay
      hideTimeout = setTimeout(function () {
        mouseCircle.style.display = "none";
      }, 10); // Adjust the delay (in milliseconds) as needed
    }
  }

// Attach the updateMouseCircle function to the mousemove event
document.addEventListener("mousemove", updateMouseCircle);

var header = document.querySelector("header nav");
var headerLinks = header.querySelectorAll("a");
var headerButton = header.querySelectorAll("button");
var headerTitle = header.querySelectorAll("h2");
var headerDropdownMenu = header.querySelectorAll(".dropdown-menu");
var darkObjects = document.querySelectorAll(".dark-obj");

// Function to check if the header is over the element with the class "dark-obj"
function checkHeaderPosition() {
    var headerRect = header.getBoundingClientRect();

    darkObjects.forEach(function(darkObject) {
        var darkObjectRect = darkObject.getBoundingClientRect();

            // Check if the header is over the element with the class "dark-obj"
        if (headerRect.bottom > darkObjectRect.top && headerRect.top < darkObjectRect.bottom) {
            // If it is, change the background color of the header to black
            header.style.backgroundColor = "black";
            headerLinks.forEach(function(link) {
                link.style.color = "var(--background)";
            });
            headerButton.forEach(function(link) {
                link.style.color = "var(--background)";
            });
            headerTitle.forEach(function(link) {
                link.style.color = "var(--background)";
            });
            headerDropdownMenu.forEach(function(link) {
                link.style.backgroundColor = "black";
            });
        } else {
            // If it's not, reset the background color to the original color
            header.style.backgroundColor = "var(--background)"; // Change to your original background color
            headerLinks.forEach(function(link) {
                link.style.color = "var(--text)";
            });
            headerButton.forEach(function(link) {
                link.style.color = "var(--text)";
            });
            headerTitle.forEach(function(link) {
                link.style.color = "var(--text)";
            });
            headerDropdownMenu.forEach(function(link) {
                link.style.backgroundColor = "var(--background)";
            });
        }
    });
}

// Attach the checkHeaderPosition function to the scroll event
window.addEventListener("scroll", checkHeaderPosition);

// Initial check when the page loads
checkHeaderPosition();

