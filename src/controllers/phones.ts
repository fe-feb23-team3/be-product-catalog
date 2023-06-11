/* eslint-disable no-shadow */
'use strict';
import { Request, Response } from 'express';
import * as phonesService from '../services/phones';

export const getAll = async(req: Request, res: Response) => {
  const phones = await phonesService.getAll();

  res.send(phones);
};

export const getByPagination = async(req: Request, res: Response) => {
  const { page, size } = req.query;
  const phones = await phonesService
    .getByPagination(Number(page), Number(size));

  res.send(phones);
};
