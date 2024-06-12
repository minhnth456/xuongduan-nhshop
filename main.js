$(document).ready(function () {
    new Swiper(".best-seller", {
        slidesPerView: "auto",
        spaceBetween: 30,
        centeredSlides: true,
        breakpoints: {
            768: {
                centeredSlides: false,
            },
        },
    });
    new Swiper(".testimonials", {
        slidesPerView: "auto",
        spaceBetween: 30,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-testimonials-button-next",
            prevEl: ".swiper-testimonials-button-prev",
        },
        breakpoints: {
            768: {
                centeredSlides: false,
            },
        },
    });

    $(".my-rating").starRating({
        totalStars: 5,
        starShape: "rounded",
        strokeColor: "#894A00",
        strokeWidth: 10,
        starSize: 25,
    });

    $(".my-rating-4").starRating({
        readOnly: true,
        totalStars: 5,
        starSize: 19,
        strokeWidth: 10,
        starShape: 'rounded',
    });
});

let min = 0;
let max = 100;

const calcLeftPosition = value => 100 / (100) * (value);

$('#rangeMin').on('input', function (e) {
    const newValue = parseInt(e.target.value);
    if (newValue > max - 1) return;
    min = newValue;
    $('#thumbMin').css('left', calcLeftPosition(newValue) + '%');
    $('#min').html(newValue);
    $('#min').css({
        'left': (calcLeftPosition(newValue) - (calcLeftPosition(newValue) * 0.1)) + '%',
        'right': (100 - calcLeftPosition(max)) + '%'
    });
    $('#line').css({
        'left': calcLeftPosition(newValue) + '%',
        'right': (100 - calcLeftPosition(max)) + '%'
    });
});

$('#rangeMax').on('input', function (e) {
    const newValue = parseInt(e.target.value);
    if (newValue < min + 1) return;
    max = newValue;
    $('#thumbMax').css('left', calcLeftPosition(newValue) + '%');
    $('#max').html(newValue);
    $('#max').css({
        'left': (calcLeftPosition(newValue) - (calcLeftPosition(newValue) * 0.1)) + '%',
        'right': (100 - calcLeftPosition(max)) + '%'
    });
    $('#line').css({
        'left': calcLeftPosition(min) + '%',
        'right': (100 - calcLeftPosition(newValue)) + '%'
    });
});