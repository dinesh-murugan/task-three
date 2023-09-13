$(document).ready(function($) {
  var cardSlider = $('.card-slider').slick({
    centerMode: true, 
    centerPadding: '0', 
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  cardSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.card').removeClass('active');
    $('.slick-slide[data-slick-index="' + nextSlide + '"] .card').addClass('active');
  });
});