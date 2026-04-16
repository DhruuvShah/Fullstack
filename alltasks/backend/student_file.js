const fs = require('fs');

// 6) create student txt file in which add student details like rollno ,name ,course ,university for 5 times
let content = '';

for (let i = 1; i <= 5; i++) {
  content += `RollNo: 100${i}, Name: Student${i}, Course: Computer Science, University: Tech University\n`;
}

fs.writeFileSync('student.txt', content);
console.log('Successfully created student.txt with 5 student records.');
