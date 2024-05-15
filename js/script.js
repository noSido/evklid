let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger_active');

    menu.classList.toggle('header__nav_active');
  })

// tabs

document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
      btn.classList.remove('tabs-nav__btn--active')
    });
    e.currentTarget.classList.add('tabs-nav__btn--active');
    document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs-item--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

$(".accordion").accordion({
  heightStyle: "content"
});

// slider

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// search

let search = document.querySelector('.header__icon');
let search_input = document.querySelector('.search__input');
let search_closed = document.querySelector('.header__icon_closed');
let search_spot = document.querySelector('.header__searchspot');

search.addEventListener('click',

  function () {

    search_input.classList.toggle('search__input--active');

    search_closed.classList.toggle('header__icon_closed--active');

    search_spot.classList.toggle('header__searchspot--active')
  })


search_closed.addEventListener('click',
  function() {

    search_input.classList.remove('search__input--active');

    search_closed.classList.remove('header__icon_closed--active');

    search_spot.classList.remove('header__searchspot--active')
  })
