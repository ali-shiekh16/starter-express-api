import express, { Request, Response } from 'express';
import config from 'config';

const app = express();

const message = `${config.get('name')} is running on port ${config.get(
  'port'
)}`;

const environment = config.util.getEnv('NODE_ENV') || 'development';
console.log('The environment is: ' + environment);

app.listen(config.get('port'), () => {
  console.log(message);
});

app.get('/', (req: Request, res: Response) => {
  res.send(message);
});
