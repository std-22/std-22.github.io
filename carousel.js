(function() {
    var $controls = document.querySelectorAll('.slider__control_wrapper');
    var slidingAT = 1300;
    var slidingBlocked = false;
  
    [].slice.call($controls).forEach(function($el) {
        $el.addEventListener('click', controlClickHandler);
    });
  
    function controlClickHandler() {
        if (slidingBlocked) return;
        slidingBlocked = true;
  
        var $control = this;
        $control.classList.add('a--rotation');
  
        setTimeout(function() {
            $control.classList.remove('a--rotation');
            slidingBlocked = false;
        }, slidingAT * 0.75);
    };
}());

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";
}
