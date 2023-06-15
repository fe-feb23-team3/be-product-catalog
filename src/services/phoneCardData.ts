import { PhoneCardData } from '../models/PhoneCardData';
import fs from 'fs';

export const getAll = async() => {
  const phoneData = await PhoneCardData.findAll();

  return phoneData;
};

export const getById = async(id: string) => {
  const phoneData = await PhoneCardData.findByPk(id);

  return phoneData;
};

export const getRecomendedPhones = async(id: string) => {
  const phoneArray = await getAll();
  const chosenPhone = await getById(id);

  if (!chosenPhone) {
    return [];
  }

  const recommendedPhones = phoneArray.filter((phone) => {
    return (
      phone.priceDiscount <= chosenPhone.priceDiscount + 50
      && phone.priceDiscount >= chosenPhone.priceDiscount - 50
      && phone.id !== chosenPhone.id
    );
  });

  return recommendedPhones.slice(0, 8);
};

export const getImagesById = async(id: string) => {
  const phoneData = await PhoneCardData.findByPk(id);

  const path = `public/${phoneData?.images}`;

  if (path) {
    const image = fs.readFileSync(path);

    return image;
  }
};
