import fs_module from "fs";

fs_module.writeFile("welcome.txt", "Welcome to Node JS", function (err, data) {
  if (err) {
    console.log("Error Occured", err);
  } else {
    console.log("File Created Successfully");
  }
});
