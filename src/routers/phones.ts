'use strict';

import express from 'express';
import * as phonesController from '../controllers/phones';

export const router = express.Router();

router.get('/', phonesController.getAll);
router.get('/pagination', phonesController.getByPagination);
router.get('/:id', phonesController.getById);
