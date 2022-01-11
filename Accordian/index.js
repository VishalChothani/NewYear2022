let accordion = document.querySelector(".accordion");
let items = document.querySelectorAll(".item");

accordion.addEventListener("click", (e) => {
  items.forEach((e) => {
    e.classList.remove("open");
  });

  let selectedContent = document.querySelector(`.item-${e.target.dataset.acc}`);
  selectedContent.parentElement.classList.add("open");
});
