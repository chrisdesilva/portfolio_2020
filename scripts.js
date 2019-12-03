"use strict";

const arrow = document.querySelector("#fire");
const bio = document.querySelector(".bio");
const showBio = () => {
  bio.classList.add("show");
}

arrow.addEventListener("click", function() {
  showBio();
})

var scrollY = 0;
var distance = 10;
var speed = 24;

const bannerArrow = document.querySelector("#bannerArrow");
bannerArrow.addEventListener("click", function(){
  document.querySelector(".banner__content").scrollIntoView({
    behavior: "smooth"
  })
})

const fish = document.querySelector("#fish");
const projects = document.querySelector(".experience");
const showProjects = () => projects.classList.add("show");
fish.addEventListener("click", function() {
  showProjects();
  fish.scrollIntoView({
    behavior: "smooth"
  })
})

function grabBolt(e) {
  e
    .dataTransfer
    .setData("text/plain", e.target.id);

    e
    .currentTarget
    .style
    .opacity = "0";
}

function dragBolt(e) {
  e.preventDefault();
}

function startFire(e) {
  const id = e
    .dataTransfer
    .getData("text");

  const draggableElement = document.getElementById(id);
  const dropzone = e.target;
  const fire = document.querySelector("#fire");
  const directions = document.querySelector("#boltDirections");
  
  draggableElement
    .style
    .opacity = "0"

  dropzone
    .style
    .color = "black"

  fire
    .style
    .opacity = "1"

  directions.innerHTML = "Mmm...toasty"
  
  showBio();

  e
    .dataTransfer
    .clearData();
}

