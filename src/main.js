import "./style.css";
const $ = document;

const header = $.querySelector("#header");

function initMenu() {
  const menuBtn = $.querySelector(".menu-btn");
  const nav = $.querySelector(".nav");

  if (!menuBtn || !nav) return;

  menuBtn.addEventListener("click", (e) => {
    menuBtn.classList.toggle("active");
    nav.classList.toggle("open");
  });
}

if (header) {
  fetch("/src/components/header.html")
    .then((res) => res.text())
    .then((data) => {
      header.innerHTML = data;
      initMenu();
    });
}
