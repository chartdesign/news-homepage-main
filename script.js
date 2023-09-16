const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.querySelector(".mobile-nav-links");
const mobileNavMenu = document.querySelector(".mobile-nav-menu");

openMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  openMenu.classList.add("hidden");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
  openMenu.classList.remove("hidden");
});
