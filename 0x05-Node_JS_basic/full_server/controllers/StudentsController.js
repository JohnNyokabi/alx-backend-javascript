import { readDatabase } from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase(req.filePath);
      const fields = Object.keys(data).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
      
      res.status(200).write('This is the list of our students\n');
      
      fields.forEach((field) => {
        const studentsInField = data[field].filter(student => student !== '');
        res.write(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.join(', ')}\n`);
      });

      res.end();
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major.toUpperCase();
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const data = await readDatabase(req.filePath);
      const studentsInMajor = data[major].filter(student => student !== '');
      res.status(200).send(`List: ${studentsInMajor.join(', ')}\n`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default StudentsController;
