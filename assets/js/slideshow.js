let slideIndex = 1;
showSlides(slideIndex);

// Next and Previous Control
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail Image Controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Show Slides for the Slideshow
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dotMarker");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0 ; i < slides.length ; i++)
    {
        slides[i].style.display = "none";
    }

    for (i = 0 ; i < dots.length ; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
}
