var header = document.querySelector("header");
var page = document.querySelector(".page-start");
var pageOffsetTop = page.offsetTop;

window.addEventListener("resize", function () {
  pageOffsetTop = page.offsetTop;
});
window.addEventListener("scroll", function () {
  var scrolled = window.pageYOffset >= pageOffsetTop;
  if (scrolled) {
    header.style.backgroundColor = "blue";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
