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
