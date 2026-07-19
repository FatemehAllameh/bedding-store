import "./style.css";

import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import { Breakpoints } from "@glidejs/glide/dist/glide.modular.esm.js";

// --- header --- //
// elements
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");
const announcementBar = document.querySelector(".announcement-bar");
// events
menuBtn.addEventListener("click", (e) => {
  menuBtn.classList.toggle("active");
  nav.classList.toggle("open");
  overlay.classList.toggle("active");
});
closeBtn.addEventListener("click", () => {
  announcementBar.classList.remove("md:block");
});

// --- products page --- //
// elements
const filterTitle = document.querySelectorAll(".filter-title");
const filterList = document.querySelector(".filter-list");
// events
filterTitle.forEach((title) => {
  const chevronToggle = title.querySelector(".chevron-toggle");
  const list = title.nextElementSibling;
  title.addEventListener("click", () => {
    title.classList.toggle("mb-4");
    chevronToggle.classList.toggle("rotate");
    list.classList.toggle("open");
  });
});

// --- product details page --- //
// elements
const colorBtns = document.querySelectorAll(".color-btn");
const addBtn = document.querySelector(".add-btn");
const reduceBtn = document.querySelector(".reduce-btn");
const quntityText = document.querySelector(".quntity-text");
const readmoreBtn = document.querySelector(".readmore-btn");
const readlessBtn = document.querySelector(".readless-btn");
const descriptionWrapper = document.querySelector(".description-wrapper");
const fade = document.querySelector(".fade");

// events
colorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    colorBtns.forEach((btn) => {
      btn.style.borderColor = "#FAFAFA";
    });
    btn.style.borderColor = btn.dataset.color;
  });
});

if (addBtn && reduceBtn && quntityText) {
  addBtn.addEventListener("click", () => {
    let quantity = quntityText.textContent;
    quntityText.textContent = ++quantity;
  });
  reduceBtn.addEventListener("click", () => {
    if (quntityText.textContent > 0) {
      let quantity = quntityText.textContent;
      quntityText.textContent = --quantity;
    }
  });
}

readmoreBtn.addEventListener("click", () => {
  descriptionWrapper.classList.remove("max-h-32");
  fade.classList.add("hidden");
  readmoreBtn.classList.add("hidden");
  readmoreBtn.classList.remove("flex");
  readlessBtn.classList.remove("hidden");
  readlessBtn.classList.add("flex");
});
readlessBtn.addEventListener("click", () => {
  descriptionWrapper.classList.add("max-h-32");
  fade.classList.remove("hidden");
  readmoreBtn.classList.remove("hidden");
  readmoreBtn.classList.add("flex");
  readlessBtn.classList.add("hidden");
  readlessBtn.classList.remove("flex");
});

// Glide
new Glide(".glide", {
  type: "carousel",
  direction: "rtl",
  perView: 1.4,
  focusAt: "0",
  gap: 12,
}).mount();
