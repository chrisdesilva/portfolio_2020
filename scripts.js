"use strict";

var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

let scrollpos = window.scrollY;
const banner = document.querySelector(".banner__content");
let contentpos = banner.offsetTop;
const showBanner = () => banner.classList.add("show");
window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;
  contentpos = banner.offsetTop - 300
  if (scrollpos >= contentpos) { 
    showBanner();
  }
  console.log(scrollpos, contentpos);
})

if (isInViewport(banner)) {
  showBanner();
}

const arrow = document.querySelector("#moreInfo");
const bio = document.querySelector(".bio");
const showBio = () => bio.classList.add("show");

arrow.addEventListener("click", function() {
  showBio();
})