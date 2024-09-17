const fs = require('fs');

function countStudents(pathName) {
  const students = {};
  const fields = {};
  let length = 0;
  try {
    const input = fs.readFileSync(pathName, 'utf-8');
    const lines = input.toString().split('\n');
    for (let x = 0; x < lines.length; x += 1) {
      if (lines[x]) {
        length += 1;
        const field = lines[x].toString().split(',');

        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
          students[field[3]].push(field[0]);
        } else {
          students[field[3]] = [field[0]];
        }
        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
          fields[field[3]] += 1;
        } else {
          fields[field[3]] = 1;
        }
      }
    }
    const y = length - 1;
    console.log(`Number of students: ${y}`);
    for (const [k, v] of Object.entries(fields)) {
      if (k !== 'field') {
        console.log(`Number of students in ${k}: ${v}. List: ${students[k].join(', ')}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
