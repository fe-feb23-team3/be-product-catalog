/* eslint-disable no-shadow */
'use strict';
import { Request, Response, NextFunction } from 'express';
import * as authService from '../services/authentification';

export const login = async(
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password } = req.body;

  const user = await authService.login(email, password);

  if (!user) {
    res.status(401).send('Wrong email or password');
  }

  res.send(user);
};

export const register = async(
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password } = req.body;

  const user = await authService.register(email, password);

  res.send(user);
};
