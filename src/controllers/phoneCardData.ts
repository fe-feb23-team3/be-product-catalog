/* eslint-disable no-shadow */
'use strict';
import { Request, Response } from 'express';
import * as phoneCardDataService from '../services/phoneCardData';

export const getAll = async(req: Request, res: Response) => {
  const phoneCardData = await phoneCardDataService.getAll();

  res.send(phoneCardData);
};

export const getById = async(req: Request, res: Response) => {
  const { id } = req.params;
  const requiredPhoneCardData = await phoneCardDataService.getById(String(id));

  res.send(requiredPhoneCardData);
};

export const getRecomendedPhones = async(req: Request, res: Response) => {
  const { id } = req.params;
  const phones = await phoneCardDataService.getRecomendedPhones(id);

  res.send(phones);
};

export const getImagesById = async(req: Request, res: Response) => {
  const { id } = req.params;
  const requiredImages = await phoneCardDataService.getImagesById(String(id));

  res.send(requiredImages);
};

export const getImageByPath = async(req: Request, res: Response) => {
  const { id, orderNumber } = req.params;
  const requiredImage = await phoneCardDataService.getImageByPath(
    String(id),
    Number(orderNumber),
  );

  res.send(requiredImage);
};
