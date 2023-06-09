/* eslint-disable max-len */
import { Sequelize } from 'sequelize';
require('dotenv').config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URI = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;

export const dbInit = () => {
  return new Sequelize(
    URI,
    {
      dialectOptions: {
        ssl: true,
      },
    },
  );
};
