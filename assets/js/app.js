const menulist = document.querySelector(".navbar-items");
const menuicon = document.querySelector(".menuicon");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("showlist");
});