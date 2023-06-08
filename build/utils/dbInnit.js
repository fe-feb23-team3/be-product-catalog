"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bdInit = void 0;
/* eslint-disable max-len */
const sequelize_1 = require("sequelize");
const URI = `postgres://${process.env.DB_NAME}:${process.env.DB_PASSWORD}-long-meadow-678376.us-east-2.aws.neon.tech/neondb`;
const bdInit = () => {
    return new sequelize_1.Sequelize(URI, {
        dialectOptions: {
            ssl: true,
        },
    });
};
exports.bdInit = bdInit;
