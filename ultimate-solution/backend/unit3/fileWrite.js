import fs from 'fs';

fs.writeFile('welcome.txt', 'Welcome to Node JS', (err) => {
  if (err) {
    console.log("Error writing file..!", err);
  } else {
    console.log("File Created Successfully..!");
  }
});
