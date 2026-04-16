// 8) create calculator program using user-defined modules (App File)
const calculator = require('./calc_module');

console.log("=== User-Defined Module Calculator ===");
console.log("Addition (10 + 5):", calculator.add(10, 5));
console.log("Subtraction (10 - 5):", calculator.subtract(10, 5));
console.log("Multiplication (10 * 5):", calculator.multiply(10, 5));
console.log("Division (10 / 5):", calculator.divide(10, 5));
console.log("Division by zero (10 / 0):", calculator.divide(10, 0));
console.log("======================================");
