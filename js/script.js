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

// from

// $('.contact-me__form').submit(function (el) {
//   el.preventDefault();

//   const form = $('form');

//   let error = formValidations(form);

//   if (error === 0) {
//   } else {
//     alert('Заполните поля');
//   }
// });

function formValidations(form) {
  let error = 0;
  let formReq = form.querySelectorAll('._req');

  formReq.forEach((el) => {
    formRemoveError(el);
    console.log(el);
    if (el.classList.contains('_email')) {
      if (emailTest(el)) {
        formAddError(el);
        error++;
      }
    } else {
      if (el.value === '') {
        formAddError(el);
        error++;
      }
    }
  });
  return error;
}
function formAddError(input) {
  input.parentElement.classList.add('_error');
  input.classList.add('_error');
}
function formRemoveError(input) {
  input.parentElement.classList.remove('_error');
  input.classList.remove('_error');
}
function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

var form = document.getElementById('my-form');

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById('my-form-status');
  var data = new FormData(event.target);

  let error = formValidations(document.querySelector('.contact-me__form'));

  if (error === 0) {
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          status.innerHTML = 'Thanks for your message!';
          form.reset();
        } else {
          response.json().then((data) => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data['errors'].map((error) => error['message']).join(', ');
            } else {
              status.innerHTML = 'Oops! There was a problem submitting your form';
            }
          });
        }
      })
      .catch((error) => {
        status.innerHTML = 'Oops! There was a problem submitting your form';
      });
  } else {
    status.innerHTML = 'Заполните поля';
  }
}
form.addEventListener('submit', handleSubmit);
