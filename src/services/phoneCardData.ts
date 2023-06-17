import { Phone } from '../models/Phone';
import { PhoneCardData } from '../models/PhoneCardData';
import fs from 'fs';

export const getAll = async() => {
  const phoneData = await Phone.findAll();

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
      phone.fullPrice <= chosenPhone.priceDiscount + 200
      && phone.fullPrice >= chosenPhone.priceDiscount - 200
      && phone.itemId !== chosenPhone.id
    );
  });

  return recommendedPhones.slice(0, 8);
};

export const getImagesById = async(id: string) => {
  const phoneData = await getById(id);
  const imagesArray = [];

  if (phoneData) {
    for (let i = 0; i < phoneData.images.length; i++) {
      const imagePath = `public/${phoneData?.images[i]}`;

      const image = fs.readFileSync(imagePath);

      imagesArray.push(image);
    }
  }

  return imagesArray;
};

export const getImageByPath = async(id: string, orderNumber: number) => {
  const phoneData = await getById(id);
  const imagePath = `public/${phoneData?.images[orderNumber]}`;
  const image = fs.readFileSync(imagePath);

  return image;
};
