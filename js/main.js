function myFunction(x) {
    if (x.matches) {
        let input = document.querySelector(".form-group input");
        let searchIcon = document.querySelector(".form-group .fa-magnifying-glass");
        input.style.width = "0"
        input.style.visibility = "hidden";
        let navMenu = document.querySelector(".navbar-menu-container");
        navMenu.style.width = "0"
        searchIcon.addEventListener("click", () => {
            if (input.style.width == "100%") {
                input.style.width = "0"
                input.style.visibility = "hidden";
                searchIcon.className = "fa-solid fa-magnifying-glass";
            } else {
                input.style.width = "100%"
                input.style.visibility = "visible";
                searchIcon.className = "fa-solid fa-xmark";
            }
        });


    } else {
        let navMenu = document.querySelector(".navbar-menu-container");
        navMenu.style.width = "auto"

        let input = document.querySelector(".form-group input");

        input.style.width = "100%"
        input.style.visibility = "visible";

    }
};
const mmObj = window.matchMedia("(max-width: 770px)")
myFunction(mmObj);
mmObj.addListener(myFunction);

let closeIcon = document.querySelector(".navbar-menu .fa-xmark");
let openIcon = document.querySelector(".reso .fa-bars");
let navMenu = document.querySelector(".navbar-menu-container");

openIcon.addEventListener("click", () => {
    navMenu.style.overflowX = "hidden";
    navMenu.style.width = "250px"

});

closeIcon.addEventListener("click", () => {
    navMenu.style.overflowX = "auto";
    navMenu.style.width = "0"

});