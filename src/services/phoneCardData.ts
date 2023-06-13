import { PhoneCardData } from '../models/PhoneCardData';

export const getAll = async() => {
  const phoneData = await PhoneCardData.findAll();

  return phoneData;
};
