document.addEventListener("DOMContentLoaded", function () {
    const mainDisplay = document.getElementById("image-display");
    const thumbnails = document.querySelectorAll(".preview");
  
    // Function to update main display with the image and alt text
    function showImage(img) {
      mainDisplay.style.backgroundImage = `url(${img.src})`;
      mainDisplay.textContent = img.alt;
    }
  
    // Function to reset the main display to the original message
    function resetDisplay() {
      mainDisplay.style.backgroundImage = "";
      mainDisplay.textContent = "Hover or focus on an image to view it here.";
    }
  
    // Add tabindex to each image and set up event listeners
    thumbnails.forEach((thumbnail) => {
      // Add tabindex dynamically via JavaScript
      thumbnail.setAttribute("tabindex", "0");
  
      // Mouseover and mouseout for mouse users
      thumbnail.addEventListener("mouseover", () => showImage(thumbnail));
      thumbnail.addEventListener("mouseout", resetDisplay);
  
      // Focus and blur for keyboard users
      thumbnail.addEventListener("focus", () => showImage(thumbnail));  // Focus event
      thumbnail.addEventListener("blur", resetDisplay);                 // Blur event
    });
  });