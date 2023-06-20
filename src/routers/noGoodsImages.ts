'use strict';

import express from 'express';
import * as noGoodsImagesController from '../controllers/noGoodsImages';

export const router = express.Router();

router.get('/', noGoodsImagesController.getAll);
router.get('/:id', noGoodsImagesController.getById);
router.get('/:id/image', noGoodsImagesController.getImagesById);
