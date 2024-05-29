const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const fields = {};

        lines.forEach((line) => {
          const [firstName, lastName, age, field] = line.split(',');
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstName);
        });

        console.log(`Number of students: ${lines.length}`);
        for (const field in fields) {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
