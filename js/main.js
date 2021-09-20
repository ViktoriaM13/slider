var prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dot');

var index = 0;

function activeSlide(n) {
    for(slide of slides) {
        slide.classList.remove('active')
    };
    slides[n].classList.add('active');
    for(dot of dots) {
        dot.classList.remove('active')
    };
    dots[n].classList.add('active')
};

function nextSlide() {
    if (index == slides.length - 1) {
        index = 0
    } else {
        index++
    };
    activeSlide(index)
};

function prevSlide() {
    if (index == 0) {
        index = slides.length - 1
    } else {
        index--
    };
    activeSlide(index)
};

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

dots.forEach(function(item) {
    item.addEventListener('click', function() {
        for(dot of dots) {
            dot.classList.remove('active')
        };
        var target = event.target;
        target.classList.add('active');
        var currDot = event.target.dataset.btn;
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
            if (slides[i].dataset.content === currDot) {
                slides[i].classList.add('active');
                index = i
            }
        }
    })
});