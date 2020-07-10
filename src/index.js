import './styles/style.scss';
import * as $ from 'jquery';
import 'slick-carousel';

if (process.env.NODE_ENV === 'development') {
    require('./index.html');
}

// <------ Services START ------>
$(".services-btn").click(function(e, e1) {
    e = $(this).parent().parent().children(".services__item-inner");
    e1 = $(".services__item-outer.active");

    if (!e.is(':visible')) {
        $(".services__item-inner").slideUp();
        e1.children(".services__item-inner").slideUp(400, function() {
            e1.removeClass("active");
        });

        e.slideDown();
        e.attr('style', 'display: flex;');
        e.parent().addClass("active");
    } else {
        e.slideToggle();
        e.parent().toggleClass("active");
    }
});
// <------ Services START ------>

$(document).ready(function() {
    // <------ Slick slider reviews START ------>
    $('.reviews-rcolumn').slick({
        arrows: true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 2,
    });
    // <------ Slick slider reviews END ------>

    // <------ Team slider START ------>
    $(".team__slider-item").on('click', function(elem) {
        elem = elem.currentTarget;

        let classArray = elem.className.split(' ');
        if (!classArray.includes('active')) {
            $(".team__slider-item").removeClass('active');
            $(this).addClass('active');
        }

        let index = (elem.className.split(' '))[1];
        let text = $(`.team__resume .${index}`);
        if (!text.is(':visible')) {
            $(".team__resume-item").slideUp(0);
            text.slideDown(0);
        }
    });
    // <------ Team slider END ------>

    // <------ Burger START ------>
    $('.mobile__burger').on('click', function(event) {
        $('.mobile__burger, .mobile__menu').toggleClass('active-nav');
        $('body').toggleClass('lock');
    });
    // <------ Burger END ------>
})