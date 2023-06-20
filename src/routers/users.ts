'use strict';

import express from 'express';
import * as usersController from '../controllers/users';
export const router = express.Router();

router.get('/', usersController.getAll);
router.get('/:email', usersController.getByEmail);
