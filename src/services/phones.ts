/* eslint-disable no-console */
import { Phone } from '../models/Phone';
import fs from 'fs';

export const getAll = async() => {
  const phones = await Phone.findAll();

  return phones;
};

export const getById = async(id: number) => {
  const phone = await Phone.findByPk(String(id));

  return phone;
};

export const getPhoneImage = async(id: number) => {
  const phone = await Phone.findByPk(String(id));

  const path = `public/${phone?.image}`;

  if (path) {
    const image = fs.readFileSync(path);

    return image;
  }
};

export const getByPagination = async(page: number, size: number) => {
  const phoneArray = await getAll();

  const requiredPage = page || 1;
  const requiredSize = size || 10;

  if (requiredPage > 1) {
    return phoneArray.slice(
      (requiredPage - 1) * requiredSize,
      requiredPage * requiredSize,
    );
  }

  return (await phoneArray).slice(0, requiredSize);
};

export const getRecomendedPhones = async(id: string) => {
  const phoneArray = await getAll();
  const chosenPhone = await Phone.findByPk(id);

  if (!chosenPhone) {
    return [];
  }

  const recommendedPhones = phoneArray.filter((phone) => {
    return (
      phone.price <= chosenPhone.price + 50
      && phone.price >= chosenPhone.price - 50
      && phone.id !== chosenPhone.id
    );
  });

  return recommendedPhones.slice(0, 8);
};

export const getNewestPhones = async() => {
  const phoneArray = await getAll();

  const newestPhones = phoneArray.sort((a, b) => {
    return b.year - a.year;
  });

  return newestPhones.slice(0, 8);
};
