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
  const phone = await getById(id);

  const path = `public/${phone?.image}`;

  if (path) {
    const image = fs.readFileSync(path);

    return image;
  }
};

export const getByPagination = async(
  page: number,
  size: number,
  sort: string,
) => {
  const phoneArray = await getAll();

  const requiredPage = page || 1;
  const requiredSize = size || 10;
  const requiredSort = sort || 'default';

  switch (requiredSort) {
    case 'price_low_high': {
      phoneArray.sort((a, b) => {
        return a.price - b.price;
      });
      break;
    }

    case 'price_high_low': {
      phoneArray.sort((a, b) => {
        return b.price - a.price;
      });
      break;
    }

    case 'year_low_high': {
      phoneArray.sort((a, b) => {
        return a.year - b.year;
      });
      break;
    }

    case 'year_high_low': {
      phoneArray.sort((a, b) => {
        return b.year - a.year;
      });
      break;
    }

    case 'default': {
      break;
    }

    default: {
      break;
    }
  }

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

export const getByDiscount = async() => {
  const phoneArray = await getAll();

  const hotDeals = phoneArray.sort((a, b) => {
    return (
      ((b.fullPrice - b.price) * 100) - ((a.fullPrice - a.price) * 100)
    );
  });

  return hotDeals.slice(0, 8);
};
