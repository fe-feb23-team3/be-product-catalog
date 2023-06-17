'use strict';

import express from 'express';
import * as authController from '../controllers/authentification';

export const router = express.Router();

router.post('/', authController.register);
