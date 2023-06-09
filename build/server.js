"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dbInit_1 = require("./utils/dbInit");
const app = (0, express_1.default)();
const PORT = 5000;
(0, dbInit_1.dbInit)();
app.use((0, cors_1.default)());
app.get('/', (_req, res) => {
    res.send('Hello world');
});
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`http://localhost:${PORT}`);
});
