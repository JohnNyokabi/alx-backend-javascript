const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');

      if (lines.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const fields = lines[0].split(',');
      const students = lines.slice(1).map(line => line.split(','));

      console.log(`Number of students: ${students.length}`);

      fields.forEach((field, index) => {
        const studentsInField = students.filter(student => student[index] !== '');
        const namesList = studentsInField.map(student => student[index]);
        console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${namesList.join(', ')}`);
      });

      resolve();
    });
  });
}

module.exports = countStudents;
