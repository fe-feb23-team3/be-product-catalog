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

export const getImageByPath = async(imagePath: string) => {
  const path = `public/${imagePath}`;

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
  const requiredSize = size || 8;
  const requiredSort = sort || 'default';
  let visiblePhones: Phone[] = [];

  switch (requiredSort) {
    case 'price_asc': {
      phoneArray.sort((a, b) => {
        return a.price - b.price;
      });
      break;
    }

    case 'price_desc': {
      phoneArray.sort((a, b) => {
        return b.price - a.price;
      });
      break;
    }

    case 'year_asc': {
      phoneArray.sort((a, b) => {
        return a.year - b.year;
      });
      break;
    }

    case 'year_desc': {
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

  if (requiredPage >= 1) {
    visiblePhones = phoneArray.slice(
      (requiredPage - 1) * requiredSize,
      requiredPage * requiredSize,
    );
  }

  const info = {
    pages: Math.ceil(phoneArray.length / requiredSize),
    visiblePhones: visiblePhones.slice(0, requiredSize),
  };

  return info;
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
    return (b.fullPrice - b.price) * 100 - (a.fullPrice - a.price) * 100;
  });

  return hotDeals.slice(0, 8);
};
