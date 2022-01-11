let addBtn = document.querySelector(".add-btn");
let colorsContainer = document.querySelector(".colors");
let task = document.querySelector(".task");
let error = document.querySelector(".error");
let userList = document.querySelector(".user-list");

let color;

const createAndAdd = (content) => {
  let li = document.createElement("li");
  li.classList.add(color ? color : "red");
  let text = document.createTextNode(content);
  li.appendChild(text);

  let span = document.createElement("SPAN");
  let cross = document.createTextNode("x");
  span.classList.add("cross");
  span.appendChild(cross);
  li.appendChild(span);
  userList.appendChild(li);
};

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!task.value) {
    error.classList.remove("hidden");
    return;
  } else {
    error.classList.add("hidden");
  }
  createAndAdd(task.value);
  task.value = "";
});

colorsContainer.addEventListener("click", (e) => {
  e.preventDefault();
  color = e.target.dataset.color;
});

userList.addEventListener("click", (e) => {
  if (e.target.className === "cross") {
    e.target.parentNode.remove();
  } else {
    e.target.classList.toggle("strike");
  }
});
