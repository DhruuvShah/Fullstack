const fsModule = require("fs");

setInterval(() => {
  fsModule.appendFile("Dhruv.txt", "hello Good Morning..!\n", (err) => {
    if (err) {
      console.log("Error while writing file..!\n", err);
    } else {
      console.log("Data added into file..!");
    }
  });
}, 5000);
