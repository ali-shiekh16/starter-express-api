import express from 'express';
// import config from './config/default';
import config from 'config';

const app = express();

// const message = `${config.name} is running on port ${config.port}`;
const message = `${config.get('name')} is running on port ${config.get(
  'port'
)}`;

// app.listen(config.port, () => {
app.listen(config.get('port'), () => {
  console.log(message);
});

app.get('/', (req, res) => {
  res.send(message);
});
