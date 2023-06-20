/* eslint-disable max-len */
import { Phone } from './models/Phone';
import { PhoneCardData } from './models/PhoneCardData';
import { User } from './models/User';
import { NoGoodsImages } from './models/NoGoodsImages';
import { dbInit } from './utils/dbInit';

const sync = async() => {
  dbInit();

  await Phone.sync({ alter: true });
  await PhoneCardData.sync({ alter: true });
  await User.sync({ alter: true });
  await NoGoodsImages.sync({ alter: true });
};

sync();
