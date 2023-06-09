import express from 'express';
import cors from 'cors';
import { dbInit } from './utils/dbInit';
import * as phonesRouter from './routers/phones';
import * as phoneCardDataRouter from './routers/phoneCardData';
import * as accessoriesRouter from './routers/accessories';
import * as tabletsRouter from './routers/tablets';
import * as noGoodsRouter from './routers/noGoodsImages';
import * as registerRouter from './routers/register';
import * as usersRouter from './routers/users';
import * as loginRouter from './routers/login';

const PORT = 5000;

dbInit();

const createServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use('/products/phones', phonesRouter.router);
  app.use('/products/phones/pagination', phonesRouter.router);
  app.use('/products/phones/:id', phonesRouter.router);
  app.use('/products/phones/:image', phonesRouter.router);
  app.use('/products/phones/:id/image', phonesRouter.router);
  app.use('/products/phones/:id/recomended', phonesRouter.router);
  app.use('/products/phones/newest', phonesRouter.router);
  app.use('/products/phones/discount', phonesRouter.router);

  app.use('/products/tablets', tabletsRouter.router);

  app.use('/products/accessories', accessoriesRouter.router);

  app.use('/phoneCardData', phoneCardDataRouter.router);
  app.use('/phoneCardData/:id', phoneCardDataRouter.router);
  app.use('/phoneCardData/:id/recomended', phoneCardDataRouter.router);
  app.use('/phoneCardData/:id/images', phoneCardDataRouter.router);
  app.use('/phoneCardData/:id/images/:orderNumber', phoneCardDataRouter.router);

  app.use('/noGoods', noGoodsRouter.router);
  app.use('/noGoods/:id', noGoodsRouter.router);
  app.use('/noGoods/:id/image', noGoodsRouter.router);

  app.use('/users', usersRouter.router);
  app.use('/users/:email', usersRouter.router);

  app.use('/register', registerRouter.router);
  app.use('/login', loginRouter.router);

  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`http://localhost:${PORT}`);
  });

  return app;
};

createServer();
