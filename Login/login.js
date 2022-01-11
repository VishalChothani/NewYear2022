const btnSubmit = document.querySelector(".btn-submit");
const email = document.getElementById("login-email");
const pass = document.getElementById("login-pass");

const mismatch = document.querySelector(".mismatch");
const blank = document.querySelector(".blank");
const wrongPass = document.querySelector(".wrong-pass");
const wrongEmail = document.querySelector(".wrong-email");
const success = document.querySelector(".success");

const PASSWORD = "123456";
const USER_EMAIL = "test@gmail.com";

console.log(blank);

const validator = (input, isEmail = false) => {
  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let passRegex = /^[A-Za-z]\w{7,14}$/;
  if (isEmail) {
    if (input.match(validRegex)) {
      return true;
    }
  } else {
    if (input.match(passRegex)) {
      return true;
    }
  }
  return false;
};

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  mismatch.classList.add("hidden");
  blank.classList.add("hidden");
  wrongPass.classList.add("hidden");
  wrongEmail.classList.add("hidden");
  success.classList.add("hidden");

  if (!email.value || !pass.value) {
    blank.classList.remove("hidden");
  } else if (!validator(email.value, true)) {
    wrongEmail.classList.remove("hidden");
  } else if (!validator(pass.value)) {
    wrongPass.classList.remove("hidden");
  } else if (!(email.value === USER_EMAIL && pass.value === PASSWORD)) {
    mismatch.classList.remove("hidden");
  } else {
    success.classList.remove("hidden");
  }
});
