'use strict';

import express from 'express';

import * as phoneCardDataController from '../controllers/phoneCardData';

export const router = express.Router();

router.get('/', phoneCardDataController.getAll);
router.get('/:id', phoneCardDataController.getById);
router.get('/:id/images', phoneCardDataController.getImagesById);
