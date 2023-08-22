import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index.js';

const app = express();
const target_port = 1245;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${target_port}`);
});

export default app;
