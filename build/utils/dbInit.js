"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbInit = void 0;
/* eslint-disable no-console */
/* eslint-disable max-len */
const sequelize_typescript_1 = require("sequelize-typescript");
const models_1 = require("../models");
require('dotenv').config();
// const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URI = 'postgres://bobersweat:ogsW7uFwxn3j@ep-long-meadow-678376.us-east-2.aws.neon.tech/neondb';
const dbInit = () => {
    try {
        const db = new sequelize_typescript_1.Sequelize(URI, {
            models: models_1.models,
            dialectOptions: {
                ssl: true,
            },
        });
        console.log('DB successfully initialized');
        return db;
    }
    catch (error) {
        console.log('DB failed to connect', error);
    }
};
exports.dbInit = dbInit;
