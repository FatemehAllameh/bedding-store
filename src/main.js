import "./style.css";

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");
const announcementBar = document.querySelector(".announcement-bar");
const filterTitle = document.querySelectorAll(".filter-title");
const filterList = document.querySelector(".filter-list");
const colorBtns = document.querySelectorAll(".color-btn");
const addBtn = document.querySelector(".add-btn");
const reduceBtn = document.querySelector(".reduce-btn");
const quntityText = document.querySelector(".quntity-text");

menuBtn.addEventListener("click", (e) => {
  menuBtn.classList.toggle("active");
  nav.classList.toggle("open");
  overlay.classList.toggle("active");
});
closeBtn.addEventListener("click", () => {
  announcementBar.classList.remove("md:block");
});
filterTitle.forEach((title) => {
  const chevronToggle = title.querySelector(".chevron-toggle");
  const list = title.nextElementSibling;
  title.addEventListener("click", () => {
    chevronToggle.classList.toggle("rotate");
    list.classList.toggle("open");
  });
});
colorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    colorBtns.forEach((btn) => {
      btn.style.borderColor = "#FAFAFA";
    });
    btn.style.borderColor = btn.dataset.color;
  });
});

addBtn.addEventListener("click", () => {
  let quantity = quntityText.textContent;
  quntityText.textContent = ++quantity;
});
reduceBtn.addEventListener("click", () => {
  if (quntityText.textContent > 0) {
    let quantity = quntityText.textContent;
    quntityText.textContent = --quantity;
  } else {
    return;
  }
});
