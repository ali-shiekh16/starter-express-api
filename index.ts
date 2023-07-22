import express, { Request, Response } from 'express';
// import config from 'config';

const app = express();

// const message = `${config.get('name')} is running on port ${config.get(
//   'port'
// )}`;
const message = 'Server is up and running :)';

const environment = process.env.NODE_ENV || 'dev';
console.log('The environment is: ' + environment);

app.listen(process.env.PORT || 3000, () => {
  console.log(message);
});

app.get('/', (req: Request, res: Response) => {
  res.send(message);
});
