///////////////////////////////////////
// Tabbed component

let tabs = document.querySelectorAll(".operations__tab");
let tabContainer = document.querySelector(".operations__tab-container");
let content = document.querySelectorAll(".operations__content");

tabContainer.addEventListener("click", (e) => {
  let clicked = e.target;

  tabs.forEach((e) => {
    e.classList.remove("operations__tab--active");
  });

  content.forEach((e) => {
    e.classList.remove("operations__content--active");
  });

  let selectedContent = document.querySelector(`.operations__content--${clicked.dataset.tab}`);
  clicked.classList.add("operations__tab--active");
  selectedContent.classList.add("operations__content--active");
});
