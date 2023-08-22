const express = require('express');
const { countStudents } = require('./3-read_file_async');

const app = express();
const port = 1245;
const dbPath = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');

  countStudents(dbPath)
    .then(() => {
      res.end();
    })
    .catch((error) => {
      res.end(error.message);
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
