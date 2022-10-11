window.addEventListener('load', function () {
    new Events();
});

class Events {
    constructor() {

        this.elems = document.querySelectorAll('[data-event]');
        this.call = document.querySelector('.call');
        this.callResume = document.querySelector('.callResume');

        this.init();
    }

    init() {
        this.elems.forEach((i) => {
            let eventName = i.dataset.event;

            switch (eventName) {
                case "openMenu":
                    i.addEventListener('click', this.openMenu.bind(this));
                    break;
                case "closeMenu":
                    i.addEventListener('click', this.closeMenu.bind(this));
                    break;
                case "openCall":
                    i.addEventListener('click', this.openCall.bind(this));
                    break;
                case "closeCall":
                    i.addEventListener('click', this.closeCall.bind(this));
                    break;
                case "sendCall":
                    i.addEventListener('submit', this.sendCall.bind(this));
                    break;
                case "openCallResume":
                    i.addEventListener('click', this.openCallResume.bind(this));
                    break;
                case "closeCallResume":
                    i.addEventListener('click', this.closeCallResume.bind(this));
                    break;
                case "sendCasting":
                    i.addEventListener('submit', this.sendCasting.bind(this));
                    break;
                case "morePhoto":
                    i.addEventListener('click', this.morePhoto.bind(this));
                    break;
                default:
                    console.log("Не мое событие: " + eventName);
            }
        });

        this.call.addEventListener('click', (e) => {
            if (!e.target.closest('.call__form')) {
                this.closeCall(e);
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

    openCall(e) {
        e.preventDefault();
        this.call.showModal();
        document.querySelector('html').classList.add('ovh');
    }

    closeCall(e) {
        e.preventDefault();
        this.call.close();
        document.querySelector('html').classList.remove('ovh');
    }

    sendCall(e) {
        e.preventDefault();
        let form = e.target,
            data = new FormData(form),
            url = form.action;

        $.ajax({
            type: "POST",
            url: url,
            data: data,
            processData: false,
            contentType: false,
            success: function (result) {
                if (result.status) {
                    form.classList.add("ok");
                } else {
                    alert("Что-то пошло не так, попробуйте еще раз!!!");
                }
            },
            error: function (result) {
                alert("Что-то пошло не так, попробуйте еще раз!!!");
            },
        });
    }

    openCallResume(e) {
        e.preventDefault();
        this.callResume.showModal();
        document.querySelector('html').classList.add('ovh');
    }

    closeCallResume(e) {
        e.preventDefault();
        this.callResume.close();
        document.querySelector('html').classList.remove('ovh');
    }

    sendCasting(e) {
        e.preventDefault();
        let form = e.target,
            data = new FormData(form),
            url = form.action;

        $.ajax({
            type: "POST",
            url: url,
            data: data,
            processData: false,
            contentType: false,
            success: function (result) {
                if (result.status) {
                    form.reset();
                    alert("Данные отправлены.")
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

        $.ajax({
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
        });
    }


}

window.addEventListener('load', function () {
    let main = document.querySelector('.main');

    if (main) {

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
    let file = document.querySelector('.casting-file__input');

    if (file) {
        file.addEventListener('change', function (e) {

            let name = document.querySelector('.casting-file__fake'),
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
//# sourceMappingURL=script.js.map