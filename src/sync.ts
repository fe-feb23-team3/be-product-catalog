import { Phone } from './models/Phone';
import { dbInit } from './utils/dbInit';

const sync = async() => {
  dbInit();

  await Phone.sync({ alter: true });
};

sync();
