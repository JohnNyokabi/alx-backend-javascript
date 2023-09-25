import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response, DATABASE) {
    readDatabase(DATABASE)
      .then((fields) => {
        const students = [];
        let msg;
        students.push('This is the list of our students');

        for (const key of Object.keys(fields)) {
          msg = `Number of students in ${key}: ${
            fields[key].length
          }. List: ${fields[key].join(', ')}`;

          students.push(msg);
        }
        response.send(200, `${students.join('\n')}`);
      })
      .catch(() => {
        response.send(500, 'Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res, DATABASE) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.send(500, 'Major parameter must be CS or SWE');
    } else {
      readDatabase(DATABASE)
        .then((fields) => {
          const students = fields[major];

          res.send(200, `List: ${students.join(', ')}`);
        })
        .catch(() => res.send(500, 'Cannot load the database'));
    }
  }
}

export default StudentsController;
