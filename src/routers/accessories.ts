'use strict';

import express from 'express';
import * as accessoriesController from '../controllers/accessories';

export const router = express.Router();

router.get('/', accessoriesController.getAll);
