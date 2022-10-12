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