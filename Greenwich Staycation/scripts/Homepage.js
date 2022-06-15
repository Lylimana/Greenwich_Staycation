let slideIndex = 1; 
showSlides(slideIndex); 

// -- Controls Next and Previous ---------------------------------------------------------------------------------------

function plusSlides(n) {

    showSlides(slideIndex += n);

}

// -- Slideshow specific controls ---------------------------------------------------------------------------------------

function currentSlide(n) {

    showSlides(slideIndex = n);

}

// -- Shows slides and dots---------------------------------------------------------------------------------------

function showSlides(n){

    let i; 

    let slides = document.getElementsByClassName("BackgroundImages");

    let dots = document.getElementsByClassName("dot");
    
    // -- Slide show (loops to beginning) ---------------------------------------------------------------------------------------

    if (n > slides.length) {
        slideIndex = 1 ;
    }

    // -- Slide show (loops to end) ---------------------------------------------------------------------------------------

    if (n<1) {
        slideIndex = slides.length;
    }

    // -- Hides other images and only presents one ---------------------------------------------------------------------------------------

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";

}

    // -- Automatic slideshow  ---------------------------------------------------------------------------------------

    function showSlides() {

    let i;

    let slides = document.getElementsByClassName("BackgroundImages");

    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";

    }

    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex-1].style.display = "block";

    setTimeout(showSlides, 7000);
    }