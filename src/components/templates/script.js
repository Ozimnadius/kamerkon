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