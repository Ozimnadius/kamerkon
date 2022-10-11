"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

window.addEventListener('load', function () {
  new Events();
});

var Events = /*#__PURE__*/function () {
  function Events() {
    _classCallCheck(this, Events);

    this.elems = document.querySelectorAll('[data-event]');
    this.call = document.querySelector('.call');
    this.callResume = document.querySelector('.callResume');
    this.init();
  }

  _createClass(Events, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.elems.forEach(function (i) {
        var eventName = i.dataset.event;

        switch (eventName) {
          case "openMenu":
            i.addEventListener('click', _this.openMenu.bind(_this));
            break;

          case "closeMenu":
            i.addEventListener('click', _this.closeMenu.bind(_this));
            break;

          case "openCall":
            i.addEventListener('click', _this.openCall.bind(_this));
            break;

          case "closeCall":
            i.addEventListener('click', _this.closeCall.bind(_this));
            break;

          case "sendCall":
            i.addEventListener('submit', _this.sendCall.bind(_this));
            break;

          case "openCallResume":
            i.addEventListener('click', _this.openCallResume.bind(_this));
            break;

          case "closeCallResume":
            i.addEventListener('click', _this.closeCallResume.bind(_this));
            break;

          case "sendCasting":
            i.addEventListener('submit', _this.sendCasting.bind(_this));
            break;

          case "morePhoto":
            i.addEventListener('click', _this.morePhoto.bind(_this));
            break;

          default:
            console.log("Не мое событие: " + eventName);
        }
      });
      this.call.addEventListener('click', function (e) {
        if (!e.target.closest('.call__form')) {
          _this.closeCall(e);
        }
      });
    }
  }, {
    key: "openMenu",
    value: function openMenu(e) {
      e.preventDefault();
      this.menu.classList.add('active');
      document.querySelector('html').classList.add('ovh');
    }
  }, {
    key: "closeMenu",
    value: function closeMenu(e) {
      e.preventDefault();
      this.menu.classList.remove('active');
      document.querySelector('html').classList.remove('ovh');
    }
  }, {
    key: "openCall",
    value: function openCall(e) {
      e.preventDefault();
      this.call.showModal();
      document.querySelector('html').classList.add('ovh');
    }
  }, {
    key: "closeCall",
    value: function closeCall(e) {
      e.preventDefault();
      this.call.close();
      document.querySelector('html').classList.remove('ovh');
    }
  }, {
    key: "sendCall",
    value: function sendCall(e) {
      e.preventDefault();
      var form = e.target,
          data = new FormData(form),
          url = form.action;
      $.ajax({
        type: "POST",
        url: url,
        data: data,
        processData: false,
        contentType: false,
        success: function success(result) {
          if (result.status) {
            form.classList.add("ok");
          } else {
            alert("Что-то пошло не так, попробуйте еще раз!!!");
          }
        },
        error: function error(result) {
          alert("Что-то пошло не так, попробуйте еще раз!!!");
        }
      });
    }
  }, {
    key: "openCallResume",
    value: function openCallResume(e) {
      e.preventDefault();
      this.callResume.showModal();
      document.querySelector('html').classList.add('ovh');
    }
  }, {
    key: "closeCallResume",
    value: function closeCallResume(e) {
      e.preventDefault();
      this.callResume.close();
      document.querySelector('html').classList.remove('ovh');
    }
  }, {
    key: "sendCasting",
    value: function sendCasting(e) {
      e.preventDefault();
      var form = e.target,
          data = new FormData(form),
          url = form.action;
      $.ajax({
        type: "POST",
        url: url,
        data: data,
        processData: false,
        contentType: false,
        success: function success(result) {
          if (result.status) {
            form.reset();
            alert("Данные отправлены.");
          } else {
            alert("Что-то пошло не так, попробуйте еще раз!!!");
          }
        },
        error: function error(result) {
          alert("Что-то пошло не так, попробуйте еще раз!!!");
        }
      });
    }
  }, {
    key: "morePhoto",
    value: function morePhoto(e) {
      e.preventDefault();
      $.ajax({
        dataType: "json",
        type: "POST",
        url: '/php/more.php',
        data: {},
        success: function success(result) {
          if (result.status) {
            document.querySelector('.gallery-items__list').insertAdjacentHTML('beforeEnd', result.html);
          } else {
            alert("Что-то пошло не так, попробуйте еще раз!!!");
          }
        },
        error: function error(result) {
          alert("Что-то пошло не так, попробуйте еще раз!!!");
        }
      });
    }
  }]);

  return Events;
}();

window.addEventListener('load', function () {
  var main = document.querySelector('.main');

  if (main) {
    setTimeout(function () {
      document.querySelector('.main__title').classList.add('animate');
    }, 100);
    var tlVideos = gsap.timeline();
    tlVideos.to('.main-videos__item--1', {
      opacity: 0,
      duration: 1
    }, 3.5);
    tlVideos.to('.main-videos__item--2', {
      opacity: 1,
      duration: 1.8
    }, 3.6);
    tlVideos.to('.main-videos__flash', {
      scale: 2,
      duration: 2
    }, 3.6);
    tlVideos.to('.main-videos__flash', {
      scale: 0,
      duration: 1
    }, 5.3);
    setTimeout(function () {
      document.querySelector('.header').classList.add('animate');
      document.querySelector('.main-menu').classList.add('animate');
    }, 3600);
  }
});
window.addEventListener('load', function () {
  var swiperConcerts = new Swiper(document.querySelector('.concerts-slider__swiper'), {
    spaceBetween: 20,
    pagination: {
      el: '.concerts-slider__pag'
    },
    navigation: {
      nextEl: '.concerts-slider__next',
      prevEl: '.concerts-slider__prev'
    }
  });
  var swiperReviews = new Swiper(document.querySelector('.reviews__swiper'), {
    spaceBetween: 20,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    pagination: {
      el: '.reviews__pag'
    },
    navigation: {
      nextEl: '.reviews__next',
      prevEl: '.reviews__prev'
    },
    breakpoints: {
      767.98: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3
      },
      1279.98: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 4
      }
    }
  });
});
window.addEventListener('load', function () {
  var file = document.querySelector('.casting-file__input');

  if (file) {
    file.addEventListener('change', function (e) {
      var name = document.querySelector('.casting-file__fake'),
          file = this.files[0];

      if (file) {
        name.innerHTML = file.name;
        name.classList.add('active');
      } else {
        name.innerHTML = 'Закрепить резюме в формате .docx';
        name.classList.remove('active');
      }
    });
  }
});