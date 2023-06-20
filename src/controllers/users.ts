/* eslint-disable no-shadow */
'use strict';
import { Request, Response } from 'express';
import * as usersService from '../services/users';

export const getAll = async(req: Request, res: Response) => {
  const users = await usersService.getAll();

  res.send(users);
};

export const getByEmail = async(req: Request, res: Response) => {
  const { email } = req.params;
  const user = await usersService.getByEmail(email);

  res.send(user);
};
