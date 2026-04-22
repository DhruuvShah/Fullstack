const fsModule = require("fs");

fsModule.readFile("Welcome.txt", function (err, data) {
  if (err) {
    console.log("Error Occured", err);
  } else {
    console.log("File Read Successfully");
    console.log("File Data: ", data);
    console.log("File Data: ", data.toString());
  }
});
