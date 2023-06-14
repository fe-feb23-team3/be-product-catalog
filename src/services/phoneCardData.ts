import { PhoneCardData } from '../models/PhoneCardData';

export const getAll = async() => {
  const phoneData = await PhoneCardData.findAll();

  return phoneData;
};

export const getById = async(id: string) => {
  const phoneData = await PhoneCardData.findByPk(id);

  return phoneData;
};
