'use strict';
import { NextFunction } from 'express';

export const catchError = (action: Function) => {
  return async(req: Request, res: Response, next: NextFunction) => {
    try {
      await action(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
