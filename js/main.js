//NAVBAR FOR MOBILE
var hamburgerMenu = document.querySelector("#Navbar_toggle");
var sideBar = document.querySelector("#navbar_links");

hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("change");
  sideBar.classList.toggle("increase-width");
});

//Take page back to the top
window.onscroll = function () {
  //Declared the scrollfunction() to handle hide and show back to top button;
  scrollFunction();
};

var topBtn = document.getElementById("myTopBTN");
var topBtnText = document.getElementById("BackTopBtn");
function scrollFunction() {
  if (
    document.documentElement.scrollTop > 600 ||
    document.body.scrollTop > 600
  ) {
    topBtn.style.display = "block";
    topBtnText.style.display = "block";
  } else {
    topBtn.style.display = "none";
    topBtnText.style.display = "none";
  }
}
//This function takes the webpage back to the top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
