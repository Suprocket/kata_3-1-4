let swiperInstance1, swiperInstance2, swiperInstance3;

if (window.innerWidth < 768) {
    swiperInstance1 = new Swiper('.swiper-1', {
        // Optional parameters
        slidesPerView: 1.3,
        slidesPerGroup: 1,
        loop: true,
        spaceBetween: 16,
        pagination: {
            el: '.swiper-pagination',
            clickable: false,
        },
    });
    swiperInstance2 = new Swiper('.swiper-2', {
        // Optional parameters
        slidesPerView: 1.3,
        spaceBetween: 16,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: false,
        },
    });
    swiperInstance3 = new Swiper('.swiper-3', {
        // Optional parameters
        slidesPerView: 1.3,
        loop: true,
        spaceBetween: 16,
        pagination: {
            el: '.swiper-pagination',
            clickable: false,
        },
    });
}