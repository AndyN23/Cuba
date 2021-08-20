$(function(){
    $('.photo__slider').slick({
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="img/Shape-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="img/Shape.svg" alt=""></button>',
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });
});