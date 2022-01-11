let calc = document.querySelector(".calculator");
let output = document.querySelector(".output");
let clear = document.querySelector(".num-clear");

let displayNumber = "";
let arr = new Array();

calc.addEventListener("click", (e) => {
  let number = e.target.dataset.number;
  let symbol = e.target.dataset.symbol;

  if (number) {
    displayNumber += number;
    output.value = displayNumber;
  } else if (symbol) {
    arr.push(displayNumber);
    if (symbol === "=") {
      let str = arr[0] + arr[1] + displayNumber;
      let result;
      if (arr[1]) {
        result = eval(str);
      }
      if (result) {
        output.value = result;
        displayNumber = result;
      }
      arr = new Array();
    } else {
      arr.push(symbol);
      displayNumber = "";
    }
  }
});

clear.addEventListener("click", () => {
  displayNumber = "";
  output.value = displayNumber;
  arr = new Array();
});
