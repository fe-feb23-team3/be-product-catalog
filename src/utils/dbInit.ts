/* eslint-disable no-console */
/* eslint-disable max-len */
import { Sequelize } from 'sequelize-typescript';
import { models } from '../models';
require('dotenv').config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const URI = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;

export const dbInit = () => {
  return new Sequelize(URI, {
    models,
    dialectOptions: {
      ssl: true,
    },
  });
};
