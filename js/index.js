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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
    $(".navbar-toggler").removeClass("active");
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
    $(".navbar-toggler").removeClass("active");
  });

  $(window).resize(function(){
    $(".form__search").removeClass("active");
    $("#navbarNavAltMarkup").addClass("collapse navbar-collapse")
    $(".navbar-nav").removeClass("active");
    $(".navbar-toggler").removeClass("active");
  });

  $(".navbar-expand-lg").click( function(){
    if ($(document).width() < 992) {
      $(".navbar-toggler").toggleClass("active");
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

  //СТРАНИЦА ТОВАРА
  // ПЕРЕКЛЮЧЕНИЕ ФОТО
  var photos = $(".card__photos img");

  function clearImg () {
    for (let i=0; i<photos.length; i++) {
      photos[i].classList.remove("big");
    };
  };

  for (let i=0; i<photos.length; i++) {
    photos[i].addEventListener("click", function(){
      clearImg();
      $(this).addClass("big");
    })
  };

  //ПЕРЕКЛЮЧЕНИЕ ТАБОВ
  var tabnavs = $(".tab-nav__item");
  var tabs = $(".tab__item");

  function clearTabs () {
    for (let i=0; i<tabnavs.length; i++) {
      tabnavs[i].classList.remove("tab-nav__item--active");
    };
    for (let i=0; i<tabs.length; i++) {
      tabs[i].classList.remove("active");
    };
  }

  $(".tab-nav__descr").on("click", function(ev){
    ev.preventDefault();
    clearTabs();
    $(".tab-nav__descr").addClass("tab-nav__item--active");
    $(".tab__descr").addClass("active");
  });

  $(".tab-nav__chars").on("click", function(ev){
    ev.preventDefault();
    clearTabs();
    $(".tab-nav__chars").addClass("tab-nav__item--active");
    $(".tab__chars").addClass("active");
  });

  $(".tab-nav__docs").on("click", function(ev){
    ev.preventDefault();
    clearTabs();
    $(".tab-nav__docs").addClass("tab-nav__item--active");
    $(".tab__docs").addClass("active");
  });

  // СПИСОК ТОВАРОВ
  // Удаление товара

  var closeBtns = $(".item__close");
  for (let i=0; i<closeBtns.length; i++) {
    closeBtns[i].addEventListener("click", function(ev){
      ev.preventDefault();
      $(this).parent().parent().remove();
      let count = $(".item__close");
      console.log(count.length);
      if (count.length == 0) {
        $(".spisok").addClass("empty");
      }
    })
  };

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
