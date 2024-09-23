// Popup closing window

var pop = document.querySelector(".popup")
var clos = document.getElementById("clos")

clos.addEventListener("click",()=>{
    pop.style.display="none"
})


//Selecting Side Navbar, Menu
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("close-nav")

menuicon.addEventListener("click", function(){
    sidenav.style.left=0
})

closenav.addEventListener("click", function(){
    sidenav.style.left="-50%"
})


// Slider
var sliderLeftButton = document.getElementById("slider-left-activate");
var sliderRightButton = document.getElementById("slider-right-activate");
var sliderImage = document.querySelector(".slider-image-container");
var sliderMargin = 0; // Initial margin
var totalImages = document.querySelectorAll(".slider-image").length; // Get the total number of images
var maxMargin = (totalImages - 1) * 100; // Adjust the max margin based on the number of images

// Move slider to the right
sliderRightButton.addEventListener("click", function () {
    sliderMargin += 100; // Move to the next slide

    if (sliderMargin > maxMargin) {        
        sliderMargin = -100; // If at the last slide, loop back to the first slide
    }

    sliderImage.style.marginLeft = `-${sliderMargin}vw`; // Move the slider
});

// Move slider to the left
sliderLeftButton.addEventListener("click", function () {
    sliderMargin -= 100; // Move to the previous slide

    if (sliderMargin < 0) {
        sliderMargin = maxMargin; // If at the first slide, loop back to the last slide
    }

    sliderImage.style.marginLeft = `-${sliderMargin}vw`; // Move the slider
});