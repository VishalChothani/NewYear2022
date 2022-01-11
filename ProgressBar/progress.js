// WITH CSS
const startCss = document.querySelector(".start-css");
const progressCss = document.querySelector(".progress-css");
const resetCss = document.querySelector(".reset-css");

startCss.addEventListener("click", () => {
  progressCss.classList.add("complete");
});

resetCss.addEventListener("click", () => {
  progressCss.classList.remove("complete");
});

// WITH JS
const startJs = document.querySelector(".start-js");
const progressJs = document.querySelector(".progress-js");
const resetJs = document.querySelector(".reset-js");

startJs.addEventListener("click", () => {
  let progress = 0;

  const interval = setInterval(() => {
    progress++;
    progressJs.style.width = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);
    }
  }, 30);
});

resetJs.addEventListener("click", () => {
  progressJs.style.width = 0;
});
