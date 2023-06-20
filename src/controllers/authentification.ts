/* eslint-disable no-shadow */
'use strict';
import { Request, Response, NextFunction } from 'express';
import * as authService from '../services/authentification';

export const register = async(
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password } = req.body;

  const user = await authService.register(email, password);

  res.send(user);
};
