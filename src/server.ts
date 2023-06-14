import express from 'express';
import cors from 'cors';
import { dbInit } from './utils/dbInit';
import * as phonesRouter from './routers/phones';
import * as phoneCardDataRouter from './routers/phoneCardData';

const PORT = 5000;

dbInit();

const createServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use('/phones', phonesRouter.router);
  app.use('/phones/pagination', phonesRouter.router);
  app.use('/phones/:id', phonesRouter.router);
  app.use('/phones/:id/image', phonesRouter.router);
  app.use('/phones/:id/recomended', phonesRouter.router);
  app.use('/phones/newest', phonesRouter.router);
  app.use('/phones/discount', phonesRouter.router);

  app.use('/phoneCardData', phoneCardDataRouter.router);

  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`http://localhost:${PORT}`);
  });

  return app;
};

createServer();
