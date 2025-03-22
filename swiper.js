let swiperInstance1, swiperInstance2, swiperInstance3;

function initSwiper() {
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
    }else{
        swiperInstance1.destroy(true, true);
        swiperInstance1 = undefined;
        swiperInstance2.destroy(true, true);
        swiperInstance2 = undefined;
        swiperInstance3.destroy(true, true);
        swiperInstance3 = undefined;
    }
}

// Проверка при загрузке страницы
window.addEventListener("load", initSwiper);

// Проверка при изменении размера экрана
window.addEventListener("resize", initSwiper);