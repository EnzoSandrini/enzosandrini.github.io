const navToggle = document.querySelector("#barra")
const navMenu = document.querySelector(".menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("menu_visible");
})