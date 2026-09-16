document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementsByClassName("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu-items");

  toggleButton[0].addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});
document.addEventListener("scroll", function () {
  let header = document.getElementsByClassName("header");
  if (window.scrollY > 0) {
    header[0].classList.add("background-scroll");
    console.log("first");
  } else {
    header[0].classList.remove("background-scroll");
  }
});
