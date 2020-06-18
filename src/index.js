import './styles/style.scss';
import * as $ from 'jquery';
import 'slick-carousel';

if (process.env.NODE_ENV === 'development') {
    require('./index.html');
}

$(".services-btn").click(function(e, e1) {
    e = $(this).parent().parent().children(".services__item-inner");
    console.log(e);
    if (!e.is(':visible')) {
        $(".services__item-inner").slideUp();
        e.slideDown();
        e.attr('style', 'display: flex;');
    } else {
        e.slideToggle();
    }
});

$(document).ready(function() {
    $('.reviews-rcolumn').slick({
        arrows: true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 2,
    });
})