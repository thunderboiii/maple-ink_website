
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


// // Wait for the DOM to be ready
// document.addEventListener("DOMContentLoaded", function () {
//     // Function to check if an element has a class
//     function hasClass(element, className) {
//       return element.classList.contains(className);
//     }
  
//     // Function to create a new image element
//     function createImage(src, className) {
//       const img = document.createElement("img");
//       img.src = src;
//       img.className = className;
//       return img;
//     }
  
//     // Function to update the hover images based on the slideshow
//     function updateHoverImages() {
//       const images = document.querySelectorAll(".hover-image");
//       let currentIndex = 0;
  
//       return function () {
//         images.forEach((img, index) => {
//           img.style.display = index === currentIndex ? "block" : "none";
//         });
  
//         currentIndex = (currentIndex + 1) % images.length;
//       };
//     }
  
//     // Function to initialize the hover images display
//     function initializeHoverImagesDisplay() {
//       const images = document.querySelectorAll(".hover-image");
//       images.forEach((img, index) => {
//         img.style.display = index === 0 ? "block" : "none";
//       });
//     }
  
//     // Call the initialization function once
//     initializeHoverImagesDisplay();
  
//     // Call updateHoverImages to set up the slideshow
//     const updateImages = updateHoverImages();
//     setInterval(updateImages, 1000);
  
//     // Variables to track mouse position
//     let mouseX = 0;
//     let mouseY = 0;
  
//     // Function to handle mouse movement
//     // Function to handle mouse movement
// function handleMouseMove(event) {
//     mouseX = event.clientX;
//     mouseY = event.clientY;
  
//     // Check if the element under the mouse contains the class "image-hover-wrapper"
//     const imageWrapper = document.elementFromPoint(mouseX, mouseY);
//     if (imageWrapper && hasClass(imageWrapper, "image-hover-wrapper")) {
//       // Check if there is an element with id "hover-images" inside the "image-hover-wrapper"
//       const hoverImagesWrapper = imageWrapper.querySelector("#hover-images");
//       if (hoverImagesWrapper) {
//         // Check if there are img elements with class "hover-image" inside "hover-images"
//         const hoverImages = hoverImagesWrapper.querySelectorAll(".hover-image");
//         if (hoverImages.length > 0) {
//           // Follow the mouse with the center of each hover image
//           hoverImages.forEach((img) => {
//             const rect = img.getBoundingClientRect();
//             const offsetX = rect.width / 2;
//             const offsetY = rect.height / 2;
//             img.style.left = mouseX - offsetX + "px";
//             img.style.top = mouseY - offsetY + "px";
//           });
  
//           return;
//         }
//       }
//     }
  
//     // If no suitable elements are found, hide all hover images
//     const allHoverImages = document.querySelectorAll(".hover-image");
//     allHoverImages.forEach((img) => {
//       img.style.display = "none";
//     });
//   }
  
  
//     // Add event listener for mouse movement
//     document.addEventListener("mousemove", handleMouseMove);
//   });
  
  

