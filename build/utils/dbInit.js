"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbInit = void 0;
/* eslint-disable no-console */
/* eslint-disable max-len */
const sequelize_typescript_1 = require("sequelize-typescript");
const models_1 = require("../models");
require('dotenv').config();
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const URI = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;
const dbInit = () => {
    return new sequelize_typescript_1.Sequelize(URI, {
        models: models_1.models,
        dialectOptions: {
            ssl: true,
        },
    });
};
exports.dbInit = dbInit;
