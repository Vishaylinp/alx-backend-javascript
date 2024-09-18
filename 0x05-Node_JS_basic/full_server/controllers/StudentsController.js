import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response, DATABASE) {
    readDatabase(DATABASE)
      .then((fields) => {

      const students = [];
      let disp;

      students.push('This is the list of our students')
      for (const k of Object.keys(fields)) {
        disp = `Number of students in ${k}: ${
          fields[keys].length
        }. List: ${fields[k].join(', ')}`;
        students.push(disp);
      }
      response.send(200, `${studnets.join('\n')}`);
    })
    .catch(() => {
      response.send(500, 'Cannot load the database');
  });
}

  static getAllStudentsByMajor(request, response, DATABASE) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      request.send(500, 'Major parameter must be CS or SWE');
    } else {
      readDatabase(DATABASE)
        .then((fields) => {
          const students = fields[major];
          request.send(200, `List: ${students.join(', ')}`);
      });
      .catch(() => response.send(500, 'Cannot load the database'));
    }    
  }
}

export default StudentsController;
