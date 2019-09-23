window.onload = function() {

  // ПОДКЛЮЧЕНИЕ СДАЙДЕРОВ в разделе МАТЕРИАЛЫ

  $('.prom__items').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 10000,
        settings: "unslick"
      }
    ]
  });

  $('.spec__items').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 10000,
        settings: "unslick"
      }
    ]
  });

  $('.arh__items').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 10000,
        settings: "unslick"
      }
    ]
  });

  // СТРАНИЦА О НАС

  $('.about-slider__items').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 10000,
        settings: "unslick"
      }
    ]
  });

  // СТРАНИЦА КАРТОЧКА ТОВАРА
  $('.card__photos').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 10000,
        settings: "unslick"
      }
    ]
  });

    // ПОИСК
  $(".btn.btn-outline-secondary").click(function(ev) {
    ev.preventDefault();
    $(".form__search").toggleClass("active");
    $(".form__search input").val("");
    $("#navbarNavAltMarkup").addClass("collapse navbar-collapse")
    $(".navbar-nav").removeClass("active");
  });

  $(".search__label").on("click", function(){
    if ($(".form__search input").val() != "") {
      $(".form-inline").submit();
    }
  });

  $(window).scroll(function(){
    $(".form__search").removeClass("active");
    $("#navbarNavAltMarkup").addClass("collapse navbar-collapse")
    $(".navbar-nav").removeClass("active");
  });

  $(window).resize(function(){
    $(".form__search").removeClass("active");
    $("#navbarNavAltMarkup").addClass("collapse navbar-collapse")
    $(".navbar-nav").removeClass("active");
  });

  $(".navbar-expand-lg").click( function(){
    if ($(document).width() < 992) {
      $("#navbarNavAltMarkup").toggleClass("collapse navbar-collapse")
      $(".navbar-nav").toggleClass("active");
      var pos = ($(".hero").offset().top - $(window).scrollTop() +1) + "px";
      $(".navbar-nav").css("top", pos);
      $(".form__search").removeClass("active");
    }
  })

  // СТРАНИЦА КАТАЛОГ
  // Форма поиска

  $(".catalog-form__show").on ("click", function(ev){
    ev.preventDefault();
    $(".catalog-form__search").toggleClass ("open");
    $(".catalog-form__submit").toggleClass ("open");
    $(".catalog-form__search").val("");
  })

  // ФИЛЬТРЫ
    $(".filter__button").on("click", function(ev){
      $(this).toggleClass("filter__button--open")
    })

    $(".filters__button").on("click", function(ev){
      ev.preventDefault();
      $(".filters__button").toggleClass("filters__button--open")

      $(".filters__button").hasClass("filters__button--open")
        ? $(".catalog-form").css("display","none")
        : $(".catalog-form").css("display","flex")
    })

    // СБРОС ФИЛЬТРОВ
    $(".filters__clear").on("click", function(ev){
      ev.preventDefault();
      var inputs = $(".filters").find("input");
      for (let i=0; i<inputs.length; i++){
        inputs[i].checked = false;
      }
    });

  // $(window).click(function(ev){
  //   if (!$(".form__search").hasClass("header__navigation")){
  //     if ($(".form__search").hasClass("active")) {
  //       if (!$(event.target).closest('div').hasClass("form__search")) {
  //         $(".form__search").removeClass("active");
  //       };
  //     }
  //   }
  // })
};
