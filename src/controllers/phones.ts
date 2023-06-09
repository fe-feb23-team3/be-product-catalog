/* eslint-disable no-shadow */
'use strict';
import { Request, Response } from 'express';
import * as phonesService from '../services/phones';

export const getAll = async(req: Request, res: Response) => {
  const phones = await phonesService.getAll();

  res.send(phones);
};

export const getById = async(req: Request, res: Response) => {
  const { id } = req.params;
  const phone = await phonesService.getById(id);

  res.send(phone);
};

export const getPhoneImage = async(req: Request, res: Response) => {
  const { id } = req.params;
  const image = await phonesService.getImagesById(id);

  res.send(image);
};

export const getByPagination = async(req: Request, res: Response) => {
  const { page, size, sort } = req.query;
  const phones = await phonesService.getByPagination(
    Number(page),
    Number(size),
    String(sort),
  );

  res.send(phones);
};

export const getNewestPhones = async(req: Request, res: Response) => {
  const phones = await phonesService.getNewestPhones();

  res.send(phones);
};

export const getByDiscount = async(req: Request, res: Response) => {
  const phones = await phonesService.getByDiscount();

  res.send(phones);
};
