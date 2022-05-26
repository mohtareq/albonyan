var owlServices = $('#service-slider');
$(function() {
    owlServices.owlCarousel({
        rtl: true,
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            400 : {
                items: 2
            },
            991 : {
                items: 3
            }
        }
    });
});

$('#left-ser').click(function() {
    owlServices.trigger('next.owl.carousel');
})
// Go to the previous item
$('#right-ser').click(function() {
    owlServices.trigger('prev.owl.carousel');
})

var owlWorks = $('#works-slider');
$(function() {
    owlWorks.owlCarousel({
        rtl: true,
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            400 : {
                items: 2
            },
            // breakpoint from 480 up
            991 : {
                items: 3
            }
        }
    });
});


/*
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
*/

var owlOpinions = $('#opinions-slider');
$(function() {
    owlOpinions.owlCarousel({
        rtl: true,
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
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

$('#next-opi').click(function() {
    owlOpinions.trigger('next.owl.carousel');
})
// Go to the previous item
$('#back-opi').click(function() {
    owlOpinions.trigger('prev.owl.carousel');
})