'use strict';

import express from 'express';
import * as tabletsController from '../controllers/tablets';

export const router = express.Router();

router.get('/', tabletsController.getAll);
