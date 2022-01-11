`5 falsy values`: 0, '', undefined, null, NaN

// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};

// Arrow functions
const calcAge3 = (birthYeah) => 2037 - birthYeah;
