window.addEventListener('load', function () {

    let mainObj = document.querySelector('.main');

    if (mainObj) {

        let vids = $("video");
        $.each(vids, function () {
            this.controls = false;
        });

        setTimeout(function () {
            document.querySelector('.main__title').classList.add('animate');
        }, 100);

        let tlVideos = gsap.timeline();
        document.querySelector('.main-videos__item--1').classList.add('active');
        // tlVideos.to('.main-videos__item--1', {opacity: 0, duration: 2.5}, 1.5);
        tlVideos.to('.main-videos__item--2', {opacity: 1, duration: 2.5}, 2.5);
        // tlVideos.to('.main-videos__flash', {scale: 2, duration: 2}, 2.6)
        // tlVideos.to('.main-videos__flash', {scale: 0, duration: 1}, 4.3);


        setTimeout(function () {
            document.querySelector('.header').classList.add('animate');
            document.querySelector('.main-menu').classList.add('animate');
        }, 2600);

    }
});

