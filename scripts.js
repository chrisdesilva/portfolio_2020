"use strict";

const bannerArrow = document.querySelector("#bannerArrow");
const bannerContent = document.querySelector(".banner__content");
bannerArrow.addEventListener("click", function() {
  bannerContent.scrollIntoView({
    behavior: "smooth"
  });
});

const bolt = document.querySelector("#bolt");
const fire = document.querySelector("#fire");
const boltDirections = document.querySelector("#boltDirections");
const bio = document.querySelector(".bio");
bolt.addEventListener("click", function() {
  bolt.classList.add("strike");
  setTimeout(() => {
    fire.style.opacity = "1";
    bolt.style.opacity = "0";
    boltDirections.innerHTML = "Thanks!";
  }, 1000);
  setTimeout(() => {
    bio.classList.add("show");
    bio.scrollIntoView({
      behavior: "smooth"
    });
  }, 2500);
});

const fish = document.querySelector("#fish");
const projects = document.querySelector(".experience");
fish.addEventListener("click", function() {
  fish.style.opacity = "0";
  setTimeout(() => {
    projects.classList.add("show");
    projects.scrollIntoView({
      behavior: "smooth"
    });
  }, 1000);
});
