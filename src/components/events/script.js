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