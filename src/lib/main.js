// Import our custom CSS
/* export const ssr = false;
 */
import Swiper from "swiper";
import "./style.scss";
import "swiper/swiper-bundle.css";

import { register } from "swiper/element/bundle"; // import function to register Swiper custom elements
register(); // register Swiper custom elements

import bsUtil from "bootstrap/js/dist/util/index.js";

/* 
const fslight = require("fslightbox");
const WOW = require("wow.js");
new WOW({ live: false, animateClass: "animate__animated" }).init();
 */

export function setupScrollBtn() {
  console.log(" test getUID" + bsUtil.getUID("2ss"));

  const navBar = document.querySelector(".navbar");
  let goUpBtn = document.getElementById("btn-back-to-top");
  window.addEventListener("scroll", () => {
    //if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    if (window.scrollY >= 70) {
      navBar.classList.add("sticky-nav");
      goUpBtn.style.display = "block";
    } else {
      navBar.classList.remove("sticky-nav");
      goUpBtn.style.display = "none";
    }
  });

  goUpBtn.addEventListener("click", () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  });
}

export function setupSwiper() {
  const swiper = new Swiper(".swiper", {
    //direction: "vertical",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    /*   scrollbar: {     el: ".swiper-scrollbar",     draggable: true,  }, */
    slideToClickedSlide: true,
    speed: 700,
    autoplay: {
      delay: 4000,
      pauseOnMouseEnter: true,
    },
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-30%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });
}

export const animateCSS = (element, animation, prefix = "animate__") =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;

    const nodeList = document.querySelectorAll(element);
    nodeList.forEach((node) => {
      node.classList.add(`${prefix}animated`, animationName);

      // When the animation ends, we clean the classes and resolve the Promise
      function handleAnimationEnd(event) {
        event.stopPropagation();
        node.classList.remove(`${prefix}animated`, animationName);
        resolve("Animation ended");
      }

      node.addEventListener("animationend", handleAnimationEnd, { once: true });
    });
  });
