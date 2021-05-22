const $status = $('.comments__slider-out');
const $slickElement = $('.single-item');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    const i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(`0${i}/ 0${slick.slideCount}`);
});

$('.single-item').slick({
    infinite: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});
