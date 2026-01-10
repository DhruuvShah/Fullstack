const formatDate = (date) => {
  return date.toLocaleDateString("en-US");
};

const formatTime = (date) => {
  return date.toLocaleTimeString("en-US");
};

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Export multiple items
module.exports = {
  formatDate,
  formatTime,
  generateRandomNumber,
  appName: "My Node App",
  version: "1.0.0",
};
