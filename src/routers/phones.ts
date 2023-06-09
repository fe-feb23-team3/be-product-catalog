'use strict';

import express from 'express';
import * as phonesController from '../controllers/phones';

export const router = express.Router();

router.get('/', phonesController.getAll);
