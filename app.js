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