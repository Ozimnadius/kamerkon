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