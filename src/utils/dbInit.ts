/* eslint-disable max-len */
import { Sequelize } from 'sequelize';

const URI = `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}-long-meadow-678376.us-east-2.aws.neon.tech/neondb`;

export const dbInit = () => {
  return new Sequelize(URI, {
    dialectOptions: {
      ssl: true,
    },
  });
};
