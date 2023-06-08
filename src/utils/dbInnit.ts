/* eslint-disable max-len */
import { Sequelize } from 'sequelize';

const URI = `postgres://${process.env.DB_NAME}:${process.env.DB_PASSWORD}-long-meadow-678376.us-east-2.aws.neon.tech/neondb`;

export const bdInit = () => {
  return new Sequelize(URI, {
    dialectOptions: {
      ssl: true,
    },
  });
};
