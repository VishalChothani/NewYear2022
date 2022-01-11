const languageOption = document.querySelector(".language-option");
const lang = document.querySelectorAll(".lang");

languageOption.addEventListener("change", (e) => {
  lang.forEach((element) => {
    element.classList.add("hidden");
    if (element.classList.contains(e.target.value)) {
      element.classList.remove("hidden");
    }
  });
});
