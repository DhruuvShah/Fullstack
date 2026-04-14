import fs from 'fs';

fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.log("Error reading file..!", err);
  } else {
    console.log("File Content:", data);
  }
});
