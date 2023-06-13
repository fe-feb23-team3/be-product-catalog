/* eslint-disable no-shadow */
'use strict';
import { Request, Response } from 'express';
import * as phoneCardDataService from '../services/phoneCardData';

export const getAll = async(req: Request, res: Response) => {
  const phoneCardData = await phoneCardDataService.getAll();

  res.send(phoneCardData);
};
