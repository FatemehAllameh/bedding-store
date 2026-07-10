import "./style.css";

const header = document.querySelector("#header");

function initMenu() {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  const overlay = document.querySelector(".overlay")
  const closeBtn = document.querySelector(".close-btn");
  const announcementBar = document.querySelector(".announcement-bar")

  if (!menuBtn || !nav || !closeBtn || !announcementBar) return;

  menuBtn.addEventListener("click", (e) => {
    menuBtn.classList.toggle("active");
    nav.classList.toggle("open");
    overlay.classList.toggle("active")
  });
  closeBtn.addEventListener("click", () => {
    announcementBar.classList.remove("md:block")
  })
}

if (header) {
  fetch("/src/components/header.html")
    .then((res) => res.text())
    .then((data) => {
      header.innerHTML = data;
      initMenu();
    });
}
