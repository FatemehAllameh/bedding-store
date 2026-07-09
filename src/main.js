import "./style.css";
const $ = document;

const header = $.querySelector("#header");

function initMenu() {
  const menuBtn = $.querySelector(".menu-btn");
  const nav = $.querySelector(".nav");
  const closeBtn = $.querySelector(".close-btn");
  const announcementBar = $.querySelector(".announcement-bar")

  if (!menuBtn || !nav || !closeBtn || !announcementBar) return;

  menuBtn.addEventListener("click", (e) => {
    menuBtn.classList.toggle("active");
    nav.classList.toggle("open");
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
