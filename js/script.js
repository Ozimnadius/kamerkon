

window.addEventListener('load', function () {
    new Events();
});

class Events {
    constructor() {

        this.popup = document.querySelector('.popup');
        this.popupInner = this.popup.querySelector('.popup__inner');
        this.templates = templates;

        this.init();
    }

    init() {

        document.querySelector('body').addEventListener('click', (e) => {

            if (e.target.closest('[data-event]')) {
                let i = e.target.closest('[data-event]'),
                    eventName = i.dataset.event;

                switch (eventName) {
                    case "openMenu":
                        this.openMenu(e);
                        break;
                    case "closeMenu":
                        this.closeMenu(e);
                        break;
                    case "openForm":
                        this.openForm(e);
                        break;
                    case "closeForm":
                        this.closeForm(e);
                        break;
                    case "morePhoto":
                        this.morePhoto(e);
                        break;
                    default:
                        console.log("Не мое событие: " + eventName);
                }
            }
        });

        document.querySelector('body').addEventListener('submit', (e) => {
            if (e.target.closest('[data-event]')) {
                let i = e.target.closest('[data-event]'),
                    eventName = i.dataset.event;

                switch (eventName) {
                    case "sendForm":
                        this.sendForm(e);
                        break;
                    default:
                        console.log("Не мое событие: " + eventName);
                }
            }
        });

        this.popup.addEventListener('click', (e) => {

            if (!e.target.closest('.popup__inner')) {
                this.closeForm(e);
            }
            if (e.target.closest('[data-event="closeForm"]')) {
                this.closeForm(e);
            }
        });

    }

    openMenu(e) {
        e.preventDefault();
        this.menu.classList.add('active');
        document.querySelector('html').classList.add('ovh');
    }

    closeMenu(e) {
        e.preventDefault();
        this.menu.classList.remove('active');
        document.querySelector('html').classList.remove('ovh');
    }

    openForm(e) {
        let btn = e.target.closest('[data-event]'),
            dataset = btn.dataset;

        e.preventDefault();
        this.popupInner.innerHTML = this.templates.html(dataset.name)
        this.popup.showModal();
        document.querySelector('html').classList.add('ovh');
    }

    closeForm(e) {
        e.preventDefault();
        this.popup.close();
        document.querySelector('html').classList.remove('ovh');
    }

    sendForm(e) {
        e.preventDefault();
        let form = e.target,
            ok = form.dataset.ok,
            data = new FormData(form),
            url = form.action;

        $.ajax({
            type: "POST",
            url: url,
            data: data,
            processData: false,
            contentType: false,
            success: (result) => {
                if (result.status) {
                    this.popupInner.innerHTML = this.templates.html(ok);
                    this.popup.close();
                    this.popup.showModal();
                    document.querySelector('html').classList.add('ovh');
                } else {
                    alert("Что-то пошло не так, попробуйте еще раз!!!");
                }
            },
            error: function (result) {
                alert("Что-то пошло не так, попробуйте еще раз!!!");
            },
        });
    }

    morePhoto(e) {
        e.preventDefault();
        let btn = e.target.closest('[data-event]');

            btn.closest('.gallery-items').classList.toggle('show');
            btn.classList.toggle('show');


        /*$.ajax({
            dataType: "json",
            type: "POST",
            url: '/php/more.php',
            data: {},
            success: function (result) {
                if (result.status) {
                    document.querySelector('.gallery-items__list').insertAdjacentHTML('beforeEnd', result.html)
                } else {
                    alert("Что-то пошло не так, попробуйте еще раз!!!");
                }
            },
            error: function (result) {
                alert("Что-то пошло не так, попробуйте еще раз!!!");
            },
        });*/
    }


}
class Templates {
    constructor() {
        this.content = document.querySelector('#templates').content;
    }

    html(name) {
        return this.content.querySelector(`#${name}`).innerHTML;
    }

    close() {
        $.fancybox.close();
    }

    open(name, opt = {}) {
        $.fancybox.open(this.html(name), opt);
    }

    get current() {
        return $.fancybox.getInstance().current.$content;
    }
}

const templates = new Templates();
window.addEventListener('load', function () {

    let mainObj = document.querySelector('.main');

    if (mainObj) {

        setTimeout(function () {
            document.querySelector('.main__title').classList.add('animate');
        }, 100);

        let tlVideos = gsap.timeline();
        tlVideos.to('.main-videos__item--1', {opacity: 0, duration: 1}, 3.5);
        tlVideos.to('.main-videos__item--2', {opacity: 1, duration: 1.8}, 3.6);
        tlVideos.to('.main-videos__flash', {scale: 2, duration: 2}, 3.6)
        tlVideos.to('.main-videos__flash', {scale: 0, duration: 1}, 5.3);


        setTimeout(function () {
            document.querySelector('.header').classList.add('animate');
            document.querySelector('.main-menu').classList.add('animate');
        }, 3600);

    }
});


window.addEventListener('load', function () {
    const swiperConcerts = new Swiper(document.querySelector('.concerts-slider__swiper'), {
        spaceBetween: 20,
        pagination: {
            el: '.concerts-slider__pag',
        },
        navigation: {
            nextEl: '.concerts-slider__next',
            prevEl: '.concerts-slider__prev',
        },
    });

    const swiperReviews = new Swiper(document.querySelector('.reviews__swiper'), {
        spaceBetween: 20,
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        pagination: {
            el: '.reviews__pag',
        },
        navigation: {
            nextEl: '.reviews__next',
            prevEl: '.reviews__prev',
        },
        breakpoints: {
            767.98: {
                slidesPerView: 3,
                spaceBetween: 20,
                slidesPerGroup: 3,
            },
            1279.98: {
                slidesPerView: 4,
                spaceBetween: 20,
                slidesPerGroup: 4,
            }
        }
    });
});
window.addEventListener('load', function () {

    document.querySelector('body').addEventListener('change', function (e) {
        if (e.target.closest('.casting-file__input')) {

            let file = e.target.closest('.casting-file__input');

            let name = document.querySelector('.casting-file__fake'),
                doc = file.files[0];

            if (doc) {
                name.innerHTML = doc.name;
                name.classList.add('active');
            } else {
                name.innerHTML = 'Закрепить резюме в формате .docx';
                name.classList.remove('active');
            }
        }
    });
});