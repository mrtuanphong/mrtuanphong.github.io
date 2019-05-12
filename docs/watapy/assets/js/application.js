$(document).ready(function () {
    $(".js-carouselHero").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
    });

    $('.js-carouselCategory').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            767: {
                items: 3,
                nav: true
            },
            991: {
                items: 5,
                nav: true,
                loop: true
            }
        }
    })

    // scroll:
    $('[data-scroll-to]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('data-scroll-to')).offset().top
        }, 500, 'linear');
    });

    // tooltips:
    $('[data-toggle="tooltip"]').tooltip();
})



