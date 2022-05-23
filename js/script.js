var owlServices = $('#service-slider');
$(function() {
    owlServices.owlCarousel({
        rtl: true,
        items: 2,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            991 : {
                items: 2
            }
        }
    });
});

$(function() {
    owlServices.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owlServices.trigger('next.owl');
        } else {
            owlServices.trigger('prev.owl');
        }
        e.preventDefault();
    });
});
