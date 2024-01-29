const slider = document.getElementById('workflow-slider');
const analyzing = document.getElementById('analyzing');
const prototyping = document.getElementById('prototyping');
const publishing = document.getElementById('publishing');

const leftBtn = document.getElementById('workflow-arr-left');
const rightBtn = document.getElementById('workflow-arr-right');

leftBtn.addEventListener('click', () => {
    // Decrement the value of the slider by 1
    slider.value = Math.max(parseInt(slider.value, 10) - 1, 1);

    // Update the active class based on the slider value
    updateActiveClass();
});

rightBtn.addEventListener('click', () => {
    // Increment the value of the slider by 1
    slider.value = Math.min(parseInt(slider.value, 10) + 1, 3);

    // Update the active class based on the slider value
    updateActiveClass();
});

// Function to update the active class based on the slider value
function updateActiveClass() {
    const sliderValue = parseInt(slider.value, 10);

    // Reset active class for all elements
    analyzing.classList.remove('active');
    prototyping.classList.remove('active');
    publishing.classList.remove('active');

    // Add active class based on the slider value
    if (sliderValue === 1) {
        analyzing.classList.add('active');
    } else if (sliderValue === 2) {
        prototyping.classList.add('active');
    } else if (sliderValue === 3) {
        publishing.classList.add('active');
    }
}

// Initial update of active class based on the initial slider value
updateActiveClass();
