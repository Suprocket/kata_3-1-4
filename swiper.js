let swiperInstance1, swiperInstance2, swiperInstance3;

function initSwiper() {
    if (window.innerWidth < 768) {
        if (!swiperInstance1) {
            swiperInstance1 = new Swiper(".swiper", {
                slidesPerView: 1.3,
                loop: true,
                spaceBetween: 16,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }

        if (!swiperInstance2) {
            swiperInstance2 = new Swiper(".swiper-2", {
                slidesPerView: 1.5,
                loop: true,
                spaceBetween: 30,
                pagination: {
                    el: ".swiper-pagination-2",
                    clickable: true,
                },
            });
        }

        if (!swiperInstance3) {
            swiperInstance3 = new Swiper(".swiper-3", {
                slidesPerView: 1.4,
                loop: true,
                spaceBetween: 30,
                pagination: {
                    el: ".swiper-pagination-3",
                    clickable: true,
                },
            });
        }
    } else if (window.innerWidth > 768) {
        // Уничтожение слайдеров, если ширина экрана больше 768px
        if (swiperInstance1) {
            swiperInstance1.destroy(true, true);
            swiperInstance1 = undefined;
        }
        if (swiperInstance2) {
            swiperInstance2.destroy(true, true);
            swiperInstance2 = undefined;
        }
        if (swiperInstance3) {
            swiperInstance3.destroy(true, true);
            swiperInstance3 = undefined;
        }
    }
}

// Проверка при загрузке страницы
window.addEventListener("load", initSwiper);

// Проверка при изменении размера экрана
window.addEventListener("resize", initSwiper);


// Проверка при загрузке страницы
window.addEventListener("load", initSwiper);

// Проверка при изменении размера экрана
window.addEventListener("resize", initSwiper);