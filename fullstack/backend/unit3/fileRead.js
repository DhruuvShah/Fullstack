const fs_module = require("fs");

fs_module.readFile("welcome.txt", function (err, data) {
  if (err) {
    console.log("Error Occured", err);
  } else {
    console.log("File Read Successfully");
    console.log("File Data: ", data);
    console.log("File Data: ", data.toString());
  }
});
