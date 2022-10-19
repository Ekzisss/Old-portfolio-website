// Hero

let shown = false;

$('.hero__skills').click(function () {
  if (shown) {
    $('.skills').animate({ top: '58%', opacity: '0' }, function () {
      $('.skills').hide();
    });
  } else {
    $('.skills').show();
    $('.hero__skills').css({
      animation: 'skill-anim 4s ease-in-out',
    });
    $('.skills').animate({ top: '62.5%', opacity: '1' });
  }
  $('.hero__skills-arrow').toggleClass('hero__skills-arrow--active');

  shown = !shown;
});

//about

//projects

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },

  speed: 500,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//typewriter

var typewriter = new Typewriter($('#about')[0]);
var typewriter2 = new Typewriter($('#projects__title')[0]);
var typewriter3 = new Typewriter($('#contact-me__title')[0]);

let done = [false, false, false];
$(window).scroll(function () {
  const scrollHeight = $(this).scrollTop() + $(this).innerHeight();

  // console.log($('#about')[0].children[0].childNodes.length);

  if (scrollHeight >= $('#about').offset().top + 100 && !done[0]) {
    done[0] = true;
    typewriter.typeString('About me').pauseFor(Infinity).start();
  }

  if (scrollHeight >= $('#projects__title').offset().top + 100 && !done[1]) {
    done[1] = true;
    typewriter2.typeString('Projects').pauseFor(Infinity).start();
  }

  if (scrollHeight >= $('#contact-me__title').offset().top + 100 && !done[2]) {
    done[2] = true;
    typewriter3.typeString('Contact me').pauseFor(Infinity).start();
  }
});
