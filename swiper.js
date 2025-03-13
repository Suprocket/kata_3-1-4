let swiperInstance;

function initSwiper() {
    if (window.innerWidth < 768 && !swiperInstance) {
        swiperInstance = new Swiper(".swiper", {
            slidesPerView: 1.3,
            loop: true,
            spaceBetween: 20,
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

const showAllButton = document.querySelector(".show-all-button");
const hideAllButton = document.querySelector(".hide-all-button");

showAllButton.addEventListener("click", () => {
    showAllButton.style.display = "none";
    hideAllButton.style.display = "block";
    document.querySelectorAll(".swiper-slide:nth-child(n+7)").forEach(slide => {
        slide.setAttribute("style", "display: flex !important;");
    });
});



hideAllButton.addEventListener("click", () => {
    showAllButton.style.display = "block";
    hideAllButton.style.display = "none";
    document.querySelectorAll(".swiper-slide:nth-child(n+7)").forEach(slide => {
        slide.setAttribute("style", "display: none !important;");
    });
})