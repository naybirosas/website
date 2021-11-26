const navtoggle = document.querySelector(".nav-toggle");
const navmenu = document.querySelector(".nav-menu");
navtoggle.addEventListener("clik", () => {
    navmenu.classList.toggle(".nav-menu_visible");

if(navmenu.classList.contains("nav-menu_visible")){
    navtoggle.setAttribute("aria-label", "cerrar menu");
    } else {
        navtoggle.setAttribute("aria-label","abrir menu");
    }
});