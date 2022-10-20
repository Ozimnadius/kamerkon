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

