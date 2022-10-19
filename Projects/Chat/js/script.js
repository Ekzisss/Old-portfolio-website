$(document).ready(function () {
  // chat_list

  const chats = $('.chat_list__item');

  chats[0].firstElementChild.classList.add('chat-item_dec--selected');

  chats.click((item) => {
    remove_select(chats);
    item.target.classList.add('_selected');
    item.target.firstElementChild.classList.add('chat-item_dec--selected');
  });

  function remove_select(chats) {
    chats.each((index, value) => {
      value.classList.remove('_selected');
      value.firstElementChild.classList.remove('chat-item_dec--selected');
    });
  }

  $('.show-mobile').click(function (item) {
    if (item.target.classList.length == 1) {
      $('.mobile').css('display', 'flex');
      $('.mobile').animate({ width: 325 }, 500);
      $('.profile').animate({ width: 0, 'padding-left': 0 }, 500, function () {
        $('.profile').hide();
      });
      $('.friends-item').removeClass('friends-item--active');
    } else {
      $('.mobile').animate({ width: 0 }, 500, function () {
        $('.mobile').hide();
      });
    }
    $('.show-mobile').show('slow');
    $(item.target).hide('slow');
  });

  // chat-navigation

  $('.channels-upper__count')[0].innerHTML = $('.channels-list__item').length;
  $('.friends-upper__count')[0].innerHTML = $('.friends-item').length;

  $('.channels-list__item').click(function () {
    console.log($(this));
    $('.channels-list__item').removeClass('channels-list__item--active');
    $(this).addClass('channels-list__item--active');
  });

  $('.friends-item').click(function (item) {
    if ($(window).width() <= 554 && item.target.classList.length < 3) {
      $('.mobile').animate({ width: 0 }, 500, function () {
        $('.mobile').hide();
      });
      $('.show-mobile').show('slow');
    }
    $('.friends-item').removeClass('friends-item--active');
    $(this).addClass('friends-item--active');

    if ($('.profile').css('display') != 'none') {
      return;
    }
    $('.profile').show();
    $('.profile').animate({ width: 230, 'padding-left': 20 }, 500);
  });

  // main

  // profile

  $('.profile__exit').click(function () {
    if ($('.profile').css('width') != '230px') {
      return;
    }

    $('.profile').animate({ width: 0, 'padding-left': 0 }, 500, function () {
      $('.profile').hide();
    });

    $('.friends-item').removeClass('friends-item--active');
  });
});
