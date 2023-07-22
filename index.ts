import express from 'express';
import config from 'config';

const app = express();

app.listen(config.get('port'), () => {
  console.log('Server started on port' + config.get('port'));
});

app.get('/', (req, res) => {
  res.send('App started on port: ' + config.get('port'));
});
