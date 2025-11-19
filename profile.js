const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Toggle when clicking hamburger
hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); 
    navMenu.classList.toggle("active");
});

// CLOSE when clicking anywhere outside the menu
document.addEventListener("click", (e) => {
    const clickedInsideMenu = navMenu.contains(e.target);
    const clickedHamburger = hamburger.contains(e.target);

    if (!clickedInsideMenu && !clickedHamburger) {
        navMenu.classList.remove("active");
    }
});
