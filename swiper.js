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
    if(window.innerWidth > 768 && window.innerWidth < 1024){
        document.querySelectorAll(".swiper-slide:nth-child(n+7)").forEach(slide => {
            slide.setAttribute("style", "display: none !important;");
        });
    } else{
        document.querySelectorAll(".swiper-slide:nth-child(n+9)").forEach(slide => {
            slide.setAttribute("style", "display: none !important;");
        });
    }

})