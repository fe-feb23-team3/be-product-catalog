'use strict';

import express from 'express';

import * as phoneCardDataController from '../controllers/phoneCardData';

export const router = express.Router();

router.get('/', phoneCardDataController.getAll);
router.get('/:id', phoneCardDataController.getById);
router.get('/:id/recomended', phoneCardDataController.getRecomendedPhones);
router.get('/:id/images', phoneCardDataController.getImagesById);
router.get('/:id/images/:orderNumber', phoneCardDataController.getImageByPath);
