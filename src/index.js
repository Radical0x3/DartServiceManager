import './styles/style.scss';
import * as $ from 'jquery';
import 'slick-carousel';
import {gsap, Power1} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

if (process.env.NODE_ENV === 'development') {
  require('./index.html');
}

// <------ Services START ------>
$(".services-btn").click(function (e, e1) {
  e = $(this).parent().parent().children(".services__item-inner");
  e1 = $(".services__item-outer.active");

  if (!e.is(':visible')) {
    $(".services__item-inner").slideUp();
    e1.children(".services__item-inner").slideUp(400, function () {
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

$(document).ready(function () {
  // <------ Slick slider reviews START ------>
  $('.reviews-rcolumn').slick({
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
  });
  // <------ Slick slider reviews END ------>

  // <------ Team slider START ------>
  $(".team__slider-item").on('click', function (elem) {
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
  $('.mobile__burger').on('click', function () {
    $('.mobile__burger, .mobile__menu').toggleClass('active-nav');
    $('body').toggleClass('lock');
  });
  // <------ Burger END ------>
})

window.onload = function () {
  let content = $(".intro__content");
  let video = $(".intro__video");
  let stats = $(".stats")[0];

  if (window.innerWidth > 866) {
    gsap.from(content, {duration: 1.5, left: "-120%", ease: Power1.easeInOut});
    gsap.from(video, {duration: 1.5, right: "-120%", ease: Power1.easeInOut});

    gsap.from($(".project-tool__element"), {
      scrollTrigger: {
        trigger: $(".project-tool__content"),
        start: "20px 80%",
        toggleActions: "restart none none none"
      },
      x: "-1000%",
      duration: 1,
      stagger: 0.25
    })

    gsap.from(stats, {
      scrollTrigger: {
        trigger: stats,
        start: "20px 80%"
      },
      duration: 1,
      opacity: 0
    });
  }

  let startScore = {score: 0};
  let businessEnd = $("#business").text();
  let downloadsEnd = $("#downloads").text();
  let installsEnd = $("#installs").text();
  let usersEnd = $("#users").text();

  gsap.to(startScore, {
    scrollTrigger: stats,
    duration: 5,
    score: businessEnd,
    roundProps: "score",
    ease: Power1.easeInOut,
    onUpdate: function () {
      $("#business").text(startScore.score);
    }
  });
  gsap.to(startScore, {
    scrollTrigger: stats,
    duration: 5,
    score: downloadsEnd,
    roundProps: "score",
    ease: Power1.easeInOut,
    onUpdate: function () {
      $("#downloads").text(startScore.score);
    }
  });
  gsap.to(startScore, {
    scrollTrigger: stats,
    duration: 5,
    score: installsEnd,
    roundProps: "score",
    ease: Power1.easeInOut,
    onUpdate: function () {
      $("#installs").text(startScore.score);
    }
  });
  gsap.to(startScore, {
    scrollTrigger: stats,
    duration: 5,
    score: usersEnd,
    roundProps: "score",
    ease: Power1.easeInOut,
    onUpdate: function () {
      $("#users").text(startScore.score);
    }
  });

}