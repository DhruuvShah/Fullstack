import fs from 'fs';

function date_time() {
  const date = new Date();
  return date.toLocaleString();
}

setInterval(() => {
  fs.appendFile('date_time.txt', date_time() + "\n", (err) => {
    if (err) {
      console.log("Error while writing file..!", err);
    } else {
      console.log("Data added into file..!");
    }
  });
}, 2000);
