// Export individual functions
exports.add = (a, b) => {
  return a + b;
};

exports.subtract = (a, b) => {
  return a - b;
};

exports.multiply = (a, b) => {
  return a * b;
};

exports.divide = (a, b) => {
  if (b === 0) {
    return 'Cannot divide by zero';
  }
  return a / b;
};

// Export an object
exports.calculator = {
  square: (num) => num * num,
  cube: (num) => num * num * num,
  sqrt: (num) => Math.sqrt(num)
};

// Export a constant
exports.PI = 3.14159;