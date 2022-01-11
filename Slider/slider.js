let dotsContainer = document.querySelector(".dots");
let slides = document.querySelectorAll(".slide");
let arrRight = document.querySelector(".slider__btn--right");
let arrLeft = document.querySelector(".slider__btn--left");

let currentSlide = 0;
let totalSlide = slides.length;

const goToSlide = (slide) => {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
};

const selectDot = (slide) => {
  const dots = document.querySelectorAll(".dots__dot");
  dots.forEach((element, i) => {
    element.classList.remove("dots__dot--active");
  });
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("dots__dot--active");
};

const moveSlides = (isRight = false) => {
  if (isRight) {
    if (currentSlide >= totalSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
  } else {
    if (currentSlide === 0) {
      currentSlide = totalSlide - 1;
    } else {
      currentSlide--;
    }
  }
  goToSlide(currentSlide);
  selectDot(currentSlide);
};

const createDots = () => {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${i * 100}%)`;
  });

  slides.forEach((s, i) => {
    dotsContainer.insertAdjacentHTML("beforeend", `<button class='dots__dot' data-slide=${i}></button>`);
  });
};

arrRight.addEventListener("click", (e) => {
  moveSlides(true);
});

arrLeft.addEventListener("click", (e) => {
  moveSlides(false);
});

dotsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("dots__dot")) {
    const slide = e.target.dataset.slide;
    goToSlide(slide);
    selectDot(slide);
  }
});

createDots();
selectDot(0);
