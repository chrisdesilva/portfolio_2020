"use strict";

const bannerArrow = document.querySelector("#bannerArrow");
const bannerContent = document.querySelector(".banner__content")
bannerArrow.addEventListener("click", function(){
  bannerContent.scrollIntoView({
    behavior: "smooth"
  })
})

const bolt = document.querySelector("#bolt");
const fire = document.querySelector("#fire");
const boltDirections = document.querySelector("#boltDirections");
const bio = document.querySelector(".bio");
const showBio = () => {
  bio.classList.add("show");
}
bolt.addEventListener("click", function(){
  bolt.classList.add("strike")
  showBio()
  setTimeout(() => {
    fire
      .style
      .opacity = "1"
    bolt.style.opacity = "0"
  }, 1000)
  setTimeout(() => {
    bio.scrollIntoView({
      behavior: "smooth"
    })
  }, 2500)
})

const fish = document.querySelector("#fish");
const projects = document.querySelector(".experience");
const showProjects = () => projects.classList.add("show");
fish.addEventListener("click", function() {
  showProjects();
  fish
    .style
    .opacity = "0"
  setTimeout(() => {
    projects.scrollIntoView({
      behavior: "smooth"
    })
  }, 1000)
})

