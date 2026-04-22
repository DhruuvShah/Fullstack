const fsModule = require("fs");

fsModule.writeFile("Welcome.txt", "Welcome to NodeJS", function (err, data) {
  if (err) {
    console.log("Error Occured", err);
  } else {
    console.log("File Created Successfully");
    console.log("File Data: ", data);
    console.log("File Data: ", data.toString());
  }
});
