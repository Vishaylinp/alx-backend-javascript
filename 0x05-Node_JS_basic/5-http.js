const http = require('http');
const { readFile } = require('fs');

const host = '127.0.0.1';
const port = 1245;

function countStudents(pathName) {
  const students = {};
  const fields = {};
  let length = 0;

  return new Promise((resolve, reject) => {
    readFile(pathName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let outputs = '';
        const lines = data.toString().split('\n');
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
        outputs += `Number of students: ${y}\n`;
        for (const [k, v] of Object.entries(fields)) {
          if (k !== 'field') {
            outputs += `Number of students in ${k}: ${v}. `;
            outputs += `List: ${students[k].join(', ')}\n`;
          }
        }
        resolve(outputs);
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((outputs) => {
      const outputString = outputs.slice(0, -1);
      res.end(outputString);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

app.listen(port, host, () => {
});

module.exports = app;
