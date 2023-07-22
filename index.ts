import express from 'express';
import config from 'config';

const app = express();

const message = `${config.get('name')} is running on port ${config.get(
  'port'
)}`;
app.listen(config.get('port'), () => {
  console.log(message);
});

app.get('/', (req, res) => {
  res.send(message);
});
