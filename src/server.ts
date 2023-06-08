import express from 'express';
import cors from 'cors';
import { dbInit } from './utils/dbInit';

const app = express();
const PORT = 5000;

dbInit();

app.use(cors());

app.get('/', (_req, res) => {
  res.send('Hello world');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`http://localhost:${PORT}`);
});
