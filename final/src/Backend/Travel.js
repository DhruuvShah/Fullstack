const fsModule = require("fs");

function dateTime() {
  const date = new Date();
  return date.toLocaleString();
}

setInterval(() => {
  fsModule.appendFile("DateTime.txt", dateTime() + "\n", (err) => {
    if (err) {
      console.log("Error while writing file..!", err);
    } else {
      console.log("Data added into file..!");
    }
  });
}, 2000);
