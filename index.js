// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function add(x, y) {
  const sum = x + y;
  return sum;
}

function subtract(x, y) {
  const difference = x - y;
  return difference;
}

function divide(x, y) {
  const quotient = x / y;
  return quotient
}

function multiply(x, y) {
  const product = x * y;
  return product
}

const added = add(1, 2);
const subtracted = subtract(1, 2);
const divided = divide(1, 2);
const multiplied = multiply(1, 2);

console.log(added);
console.log(subtracted);
console.log(divided);
console.log(multiplied);
