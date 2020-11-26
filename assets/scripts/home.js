$('document').ready(function() {

    $('html').css('display', 'initial');
    
    $('#toggle-icon').click(function() {
        $('#navbar ul').toggleClass('toggle-view');
    });
    
    $('.top-wrapper').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    $('.news-wrapper').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // let stick = $('thead').offset().top - parseInt($('thead').css('height'));

    // $(window).scroll(function() {
    //     if(stick < $(window).scrollTop())
    //         $('thead tr').addClass('sticky');
    //     else
    //         $('thead tr').removeClass('sticky');
    // });

});