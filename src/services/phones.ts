/* eslint-disable no-console */
import { Phone } from '../models/Phone';

export const getAll = async() => {
  const phones = await Phone.findAll();

  return phones;
};

export const getByPagination = async(page: number, size: number) => {
  const phoneArray = getAll();

  console.log(phoneArray);

  const requiredPage = page || 1;
  const requiredSize = size || 10;

  if (requiredPage > 1) {
    return (await phoneArray)
      .slice((requiredPage - 1) * requiredSize, requiredPage * requiredSize);
  }

  return (await phoneArray).slice(0, requiredSize);
};
