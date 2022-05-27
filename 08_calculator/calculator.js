const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(...array) {
  return array.reduce((prod, next)=> prod * next, 1)
};

console.log(multiply(2,5,6,9));

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

