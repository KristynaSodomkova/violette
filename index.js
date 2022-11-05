const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
    let elem = document.querySelector("header");
    elem.classList.toggle("show");
});

