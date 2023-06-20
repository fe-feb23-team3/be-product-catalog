/* eslint-disable no-shadow */
'use strict';
import { Request, Response } from 'express';
import * as noGoodsImagesService from '../services/noGoodsImages';

export const getAll = async(req: Request, res: Response) => {
  const noGoodsImages = await noGoodsImagesService.getAll();

  res.send(noGoodsImages);
};

export const getById = async(req: Request, res: Response) => {
  const { id } = req.params;
  const noGoodsImages = await noGoodsImagesService.getById(+id);

  res.send(noGoodsImages);
};

export const getImagesById = async(req: Request, res: Response) => {
  const { id } = req.params;
  const image = await noGoodsImagesService.getImagesById(+id);

  res.send(image);
};
