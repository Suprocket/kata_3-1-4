let swiperInstance;

function initSwiper() {
    if (window.innerWidth <= 768 && !swiperInstance) {
        swiperInstance = new Swiper(".swiper", {
            slidesPerView: 1.3,
            spaceBetween: 16,
            pagination: {
                el: ".swiper-pagination",
                clickable: false,
            },
        });
    } else if (window.innerWidth > 768 && swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = undefined;
    }
}

// Проверяем при загрузке страницы
window.addEventListener("load", initSwiper);

// Проверяем при изменении размера экрана
window.addEventListener("resize", initSwiper);
