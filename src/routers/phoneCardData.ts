'use strict';

import express from 'express';

import * as phoneCardDataController from '../controllers/phoneCardData';

export const router = express.Router();

router.get('/', phoneCardDataController.getAll);