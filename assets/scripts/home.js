$('#toggle-icon').click(function() {
    $('#navbar ul').toggleClass('toggle-view');
});
$('.wrapper').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 1000,
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
                slidesToShow: 2
            }
        }
    ]
});