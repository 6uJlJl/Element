window.onload = function() {

  // ПОДКЛЮЧЕНИЕ СДАЙДЕРОВ в разделе МАТЕРИАЛЫ

  $('.prom__items').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.spec__items').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.arh__items').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object




};
