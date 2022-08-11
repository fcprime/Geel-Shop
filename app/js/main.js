
$(function(){

  $('.product-related__wrap').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/slider-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/slider-right.svg" alt=""></button>',
  });

  $('.product-descr__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-descr__top-item').removeClass('product-descr__top-item--active');
    $(this).addClass('product-descr__top-item--active');

    $('.product-descr__content-item').removeClass('product-descr__content-item--active');
    $($(this).attr('href')).addClass('product-descr__content-item--active');
  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });
  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    vertical: true,
    draggable: false
  });

  $('.filter-price__input').ionRangeSlider ({
    type: "double",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
  });

  $('.star').rateYo({
    starWidth: '12px',
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00',
    readOnly: true,
    spacing: "5px"
  });

  $('.star-product').rateYo({
    starWidth: '19px',
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00',
    readOnly: true,
    spacing: "13px"
  });

  $('.product-details__input').styler ({

  });

});




// https://fcprime:Scofield48655@github.com/fcprime/Geel-internet-shop.git
// https://github.com/fcprime/Geel-internet-shop.git

// git remote --verbose
// git remote set-url origin https://github.com/fcprime/Geel-internet-shop.git

// git pull --rebase origin main