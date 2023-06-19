/* eslint-disable max-len */
import { Phone } from './models/Phone';
import { PhoneCardData } from './models/PhoneCardData';
import { User } from './models/User';
import { dbInit } from './utils/dbInit';

const sync = async() => {
  dbInit();

  await Phone.sync({ alter: true });
  await PhoneCardData.sync({ alter: true });
  await User.sync({ alter: true });
};

sync();
