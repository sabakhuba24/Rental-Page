let burgerOpen = document.getElementById("burgerMenuOn");
let burgerClose = document.getElementById("burgerMenuOff");
let burgerMenu = document.getElementById("mobileNav");

function menuOpen () {
    burgerMenu.classList.add("open");
}

function menuClose (){
    burgerMenu.classList.remove("open");
}