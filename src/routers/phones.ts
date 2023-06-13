'use strict';

import express from 'express';
import * as phonesController from '../controllers/phones';

export const router = express.Router();

router.get('/', phonesController.getAll);
router.get('/pagination', phonesController.getByPagination);
router.get('/newest', phonesController.getNewestPhones);
router.get('/discount', phonesController.getByDiscount);

router.get('/:id', phonesController.getById);
router.get('/:id/image', phonesController.getPhoneImage);
router.get('/:id/recomended', phonesController.getRecomendedPhones);
