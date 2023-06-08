import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`http://localhost:${PORT}`);
});
