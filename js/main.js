$(document).ready(function () {

//   main slider
    $('.content-mainWrapper__slider').slick({
        prevArrow: '<button type="button" class="slick-prev slick-arrow"></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"></button>',
        infinite: false,
        dots: true,
        dotsClass: 'slick-dots',
    });

//    newBooks-slider
    $('.new-books__slider').slick({
        prevArrow: '<button type="button" class="slick-prev slick-arrow"></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"></button>',
        infinite: false,
        slidesToShow: 4,
        // autoplay: true,
        // autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
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
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })

//  bestsellers
    $('.bestsellers__slider').slick({
        prevArrow: '<button type="button" class="slick-prev slick-arrow"></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"></button>',
        slidesToShow: 5,
        infinite: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })
    //    newBooks-slider
    $('.new-books__slider_two').slick({
        prevArrow: '<button type="button" class="slick-prev slick-arrow"></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"></button>',
        infinite: false,
        slidesToShow: 6,
        // autoplay: true,
        // autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    })


    $('.catalog__burger').click(function () {
        if ($(".catalog__nav-item").first().is(":hidden")) {
            $(".catalog__nav-item").show("slow");
        } else {
            $(".catalog__nav-item").slideUp();
        }
    });

    $('.catalog__burger').on('click', function () {
        $('.catalog').toggleClass('disable')
        $('.catalog__burger').toggleClass('active');
        $('.catalog__nav').toggleClass('active');
    })

    $('.catalog__nav-link').on('click', function () {
        $('.catalog__dropdown').addClass('active')
    })

    $('.catalog__dropdown-close').on('click', function () {
        $('.catalog__dropdown').removeClass('active')
    })

    $('.header-main-block__link').on('click', function () {
        $('.header-main-overlay').toggleClass('active')
    })

//        feedback popup
    $('.feedback-popup-btn').on('click', function () {
        $('.feedback-popup').addClass('active')
        $('main').addClass('active')
    })
    $('.close-popup').on('click', function () {
        $('.feedback-popup').removeClass('active')
        $('main').removeClass('active')
    })
//tabs initial
    $('ul.personality__tabs-nav').on('click', 'li:not(.personality__tabs-items_active)', function () {
        $(this)
            .addClass('personality__tabs-items_active').siblings().removeClass('personality__tabs-items_active')
            .closest('div.personality__tabs').find('div.personality__tab').removeClass('personality__tab_active').eq($(this).index()).addClass('personality__tab_active');
    });

    $('ul.personality-order__tabs-nav').on('click', 'li:not(.personality-order__tabs-items_active)', function () {
        $(this)
            .addClass('personality-order__tabs-items_active').siblings().removeClass('personality-order__tabs-items_active')
            .closest('div.personality-order').find('div.personality-order__tab').removeClass('personality-order__tab_active').eq($(this).index()).addClass('personality-order__tab_active');
    });

    $('ul.news-tabs__nav').on('click', 'li:not(.news-tabs__items_active)', function () {
        $(this)
            .addClass('news-tabs__items_active').siblings().removeClass('news-tabs__items_active')
            .closest('div.news-tabs').find('div.news-tabs__tab').removeClass('news-tabs__tab_active').eq($(this).index()).addClass('news-tabs__tab_active');
    });

    $('.book-imgBlock__btn').click(function () {
        $('.book-imgBlock__btn').removeClass('active');
        $('.book-imgBlock__big').removeClass('book-imgBlock__big_active');
        $(this).addClass('active');
        $('.book-imgBlock__big').attr('src', $(this).data('img'));
    });

//favorites
    $('.book-delivery__btn').on('click', function () {
        $('.book-delivery__btn').addClass('book-delivery__btn_active')
        $('.book-delivery__btn_active').html('<i class="fas fa-heart"></i>Добавлено в избранное')
    })

//     review place
    $('.book-desc-reviewTitle__yourRev').on('click', function () {
        $('.book-desc-form').addClass('book-desc-form__active')
        $('.book-desc-reviewTitle__yourRev').html('<img src="../images/card/union.png" alt="plus">Оставить отзыв')
    })

//    form validate

    $('.order-form').validate({
        rules: {
            name: {
                required: true,
            },
            phone: "required",
            address: "required",
            email: {
                email: true
            }
        },
        messages: {
            name: {
                required: "Это поле обязательно"
            },
            phone: {
                required: "Это поле обязательно"
            },
            address: {
                required: "Это поле обязательно"
            },
            email: {
                email: "Неправильно введен адрес почты"
            }
        }
    })


});


