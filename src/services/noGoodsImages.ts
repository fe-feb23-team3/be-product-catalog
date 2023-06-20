'use strict';

import { NoGoodsImages } from '../models/NoGoodsImages';
import fs from 'fs';

export const getAll = async() => {
  const noGoodsImages = await NoGoodsImages.findAll();

  return noGoodsImages;
};

export const getById = async(noGoodsImagesId: number) => {
  const noGoodsImages = await NoGoodsImages.findByPk(noGoodsImagesId);

  return noGoodsImages;
};

export const getImagesById = async(id: number) => {
  const img = await NoGoodsImages.findByPk(Number(id));

  const path = `public/${img?.image}`;

  if (path) {
    const image = fs.readFileSync(path);

    return image;
  }
};
