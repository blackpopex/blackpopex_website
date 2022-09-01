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

$(document).ready(function () {
  var scrollLink = $(".scroll");

  //Smooth scrolling
  scrollLink.click(function (e) {
    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      1000
    );
  });
  // active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 200;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
      }
    });
  });

  //HIDE SIDEBAR WHENEVER SIDEBAR LINK IS CLICKED
  $("#menu .scroll").click(function () {
    $("#navbar_links").removeClass("increase-width");
    $("#Navbar_toggle").removeClass("change");
  });
});

//Angular.js application for switching portf0lio tabs
var app = angular.module("mySwitchApplication", []);
app.controller("myCtrl", function ($scope) {
  $scope.twins = true;
  $scope.westend = false;
  $scope.duke = false;
  $scope.popex = false;
  $scope.twinsHospital = function () {
    $scope.twins = true;
    $scope.westend = false;
    $scope.duke = false;
    $scope.popex = false;
  };
  $scope.westendHospital = function () {
    $scope.twins = false;
    $scope.westend = true;
    $scope.duke = false;
    $scope.popex = false;
  };
  $scope.dukeMemorialHospital = function () {
    $scope.twins = false;
    $scope.westend = false;
    $scope.duke = true;
    $scope.popex = false;
  };
  $scope.blackPopex = function () {
    $scope.twins = false;
    $scope.westend = false;
    $scope.duke = false;
    $scope.popex = true;
  };
});
