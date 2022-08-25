//NAVBAR FOR MOBILE
var hamburgerMenu = document.querySelector("#Navbar_toggle");
var sideBar = document.querySelector("#navbar_links");

hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("change");
  sideBar.classList.toggle("increase-width");
});
