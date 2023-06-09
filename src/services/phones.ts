import { Phone } from '../models/Phone';

export const getAll = () => {
  return Phone.findAll();
};
