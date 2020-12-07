/*  Carosel */
$('.owl-carousel').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    autoplay: true,
    autoplayTimeout: 3000,
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        300: {
            items: 1
        },
        400: {
            items: 2
        },
        770: {
            items: 3
        },
        900: {
            items: 4
        },
        1100: {
            items: 5
        }
    }
})