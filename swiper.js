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

showAllButton.addEventListener("click", () => {
    const isExpanded = showAllButton.classList.contains("expanded");
    if (isExpanded) {
        document.querySelectorAll(".swiper-slide:nth-child(n+7)").forEach(slide => {
            slide.setAttribute("style", "display: flex !important;");
        });
        showAllButton.textContent = "Скрыть";
        document.querySelector('.show-all-button.main__content-read-more').classList.add('rotated');
        showAllButton.classList.remove("expanded");
    }else{
        document.querySelectorAll(".swiper-slide:nth-child(n+7)").forEach(slide => {
            slide.removeAttribute("style");
        });
        showAllButton.classList.add("expanded");
        showAllButton.classList.remove("rotated");
        showAllButton.textContent = "Показать всё";
    }
});