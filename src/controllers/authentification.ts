/* eslint-disable no-shadow */
'use strict';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import * as authService from '../services/authentification';
import { emailService } from '../services/email';

export const register = async(
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password } = req.body;

  const user = await authService.register(email, password);
  const token = uuidv4();

  emailService.sendActivationLink(email, token);

  res.send(user);
};
