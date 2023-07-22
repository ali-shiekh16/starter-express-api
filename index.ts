import express from 'express';
import config from './config/default';

const app = express();

const message = `${config.name} is running on port ${config.port}`;
app.listen(config.port, () => {
  console.log(message);
});

app.get('/', (req, res) => {
  res.send(message);
});
