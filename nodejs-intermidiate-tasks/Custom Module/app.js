// Import custom modules
const math = require("./mathOperations");
const User = require("./userModule");
const utils = require("./utilities");

console.log("========================================");
console.log("CUSTOM MODULE DEMONSTRATION");
console.log("========================================\n");

// Using mathOperations module
console.log("1. MATH OPERATIONS:");
console.log("   10 + 5 =", math.add(10, 5));
console.log("   10 - 5 =", math.subtract(10, 5));
console.log("   10 * 5 =", math.multiply(10, 5));
console.log("   10 / 5 =", math.divide(10, 5));
console.log("   10 / 0 =", math.divide(10, 0));

console.log("\n2. CALCULATOR OBJECT:");
console.log("   Square of 5:", math.calculator.square(5));
console.log("   Cube of 3:", math.calculator.cube(3));
console.log("   Square root of 16:", math.calculator.sqrt(16));

console.log("\n3. CONSTANT VALUE:");
console.log("   PI =", math.PI);

// Using User module
console.log("\n4. USER MODULE:");
const user1 = new User("John Doe", "john@example.com", 25);
const user2 = new User("Jane Smith", "jane@example.com", 17);

console.log("   User 1:", user1.getInfo());
console.log("   Is Adult?", user1.isAdult());

console.log("\n   User 2:", user2.getInfo());
console.log("   Is Adult?", user2.isAdult());

console.log("\n   Date:", utils.formatDate(new Date()));
console.log("   Time:", utils.formatTime(new Date()));
console.log("   Random Number:", utils.generateRandomNumber(1, 100));
console.log("   App Name:", utils.appName);
console.log("   Version:", utils.version);
console.log("\n========================================\n");
