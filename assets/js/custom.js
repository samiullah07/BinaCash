
$(document).ready(function() {

    var owl = $('.reviewContainer');
    owl.owlCarousel({
        loop: true,
        nav: false,
        items: 6,
        touchDrag: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        navClass: ['disabled'],
        dotsClass: ['disabled'],
        autoplayHoverPause: true,
        dots: false,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: false,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 6,
            },
            1300: {
                items: 6,
            }
        }
    });
});