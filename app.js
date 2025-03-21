document.querySelector(".open-aside-btn").addEventListener("click", function () {
    document.querySelector(".overlay").classList.add("overlay--active");
    document.querySelector(".aside").classList.add("aside--active");
});

document.querySelector(".close-aside-btn").addEventListener("click", function () {
    document.querySelector(".overlay").classList.remove("overlay--active");
    document.querySelector(".aside").classList.remove("aside--active");
});

document.querySelector(".overlay").addEventListener("click", function () {
    document.querySelector(".overlay").classList.remove("overlay--active");
    document.querySelector(".aside").classList.remove("aside--active");
});

const showAllButtons = document.querySelectorAll(".show-all-button");

for(let i = 0; i < showAllButtons.length; i++) {
    showAllButtons[i].addEventListener("click", function () {
            const isExpanded = showAllButtons[i].classList.contains("expanded");
            const dataType = this.getAttribute('data-type');
            if (dataType === 'show-logos') {
                if (isExpanded) {
                    document.querySelectorAll(".slide-logo:nth-of-type(n+7)").forEach(slide => {
                        slide.setAttribute("style", "display: flex !important;");
                    });
                    showAllButtons[i].textContent = "Скрыть";
                    document.querySelector('.show-all-button.main__content-read-more').classList.add('rotated');
                    showAllButtons[i].classList.remove("expanded");
                }else{
                    document.querySelectorAll(".slide-logo:nth-of-type(n+7)").forEach(slide => {
                        slide.removeAttribute("style");
                    });
                    showAllButtons[i].classList.add("expanded");
                    showAllButtons[i].classList.remove("rotated");
                    showAllButtons[i].textContent = "Показать всё";
                }
            } else if (dataType === 'show-tech') {
                if (isExpanded) {
                    document.querySelectorAll(".slide-tech:nth-of-type(n+4)").forEach(slide => {
                        slide.setAttribute("style", "display: flex !important;");
                    });
                    showAllButtons[i].textContent = "Скрыть";
                    document.querySelector('#show-tech').classList.add('rotated');
                    showAllButtons[i].classList.remove("expanded");
                }else{
                    document.querySelectorAll(".slide-tech:nth-of-type(n+4)").forEach(slide => {
                        slide.removeAttribute("style");
                    });
                    showAllButtons[i].classList.add("expanded");
                    showAllButtons[i].classList.remove("rotated");
                    showAllButtons[i].textContent = "Показать всё";
                }
            }
    })
}