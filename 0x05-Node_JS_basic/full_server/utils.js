const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(Error(err));
        return;
      }
      const cont = data.toString().split('\n');
      
      let students = cont.filter((item) => item);
      student = students.map((item) => item.split(','));

      const field = {};
      for (const x in students) {
        if (x !== 0) {
          if (!fields[students[x][3]]) fields[students[x][3]] = [];
          fields[students[x][3]].push(studnets[x][0]);
        } 
      }
      delete fields.field;
      resolve(fields);
    });
  });
}

exports default readDatabase;
