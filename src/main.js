import "./style.css";

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");
const announcementBar = document.querySelector(".announcement-bar");

menuBtn.addEventListener("click", (e) => {
  menuBtn.classList.toggle("active");
  nav.classList.toggle("open");
  overlay.classList.toggle("active");
});
closeBtn.addEventListener("click", () => {
  announcementBar.classList.remove("md:block");
});
