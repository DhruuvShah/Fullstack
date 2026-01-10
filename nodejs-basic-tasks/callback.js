// setTimeout - Executes once after a delay
console.log("Script started...");

setTimeout(() => {
  console.log("This message appears after 2 seconds");
}, 2000);

setTimeout(() => {
  console.log("This message appears after 4 seconds");
}, 4000);

// setInterval - Executes repeatedly at intervals
let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log(`Interval executed ${counter} time(s)`);

  // Stop after 5 executions
  if (counter === 5) {
    clearInterval(intervalId);
    console.log("Interval stopped!");
  }
}, 1000);

// Countdown timer example
let countdown = 10;
console.log("\nCountdown starting...");

const countdownInterval = setInterval(() => {
  console.log(`Time remaining: ${countdown} seconds`);
  countdown--;

  if (countdown < 0) {
    clearInterval(countdownInterval);
    console.log("Countdown complete! 🎉");
  }
}, 1000);

console.log("Script will continue running...\n");
