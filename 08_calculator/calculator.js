const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.reduce((prod, next)=> prod * next, 1)
};


const power = function(num1, num2) {
  return num1 ** num2;
};


const factorial = function(num) {
  let total = 1;
	for(num; num > 0; num--){
    total *= num
    console.log(total);
  }
  return total;
};

console.log(factorial(4));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

