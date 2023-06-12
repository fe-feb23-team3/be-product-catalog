"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByPagination = exports.getPhoneImage = exports.getById = exports.getAll = void 0;
/* eslint-disable no-console */
const Phone_1 = require("../models/Phone");
const fs_1 = __importDefault(require("fs"));
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const phones = yield Phone_1.Phone.findAll();
    return phones;
});
exports.getAll = getAll;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const phone = yield Phone_1.Phone.findByPk(String(id));
    return phone;
});
exports.getById = getById;
const getPhoneImage = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const phone = yield Phone_1.Phone.findByPk(String(id));
    const path = `public/${phone === null || phone === void 0 ? void 0 : phone.image}`;
    if (path) {
        const image = fs_1.default.readFileSync(path);
        return image;
    }
});
exports.getPhoneImage = getPhoneImage;
const getByPagination = (page, size) => __awaiter(void 0, void 0, void 0, function* () {
    const phoneArray = (0, exports.getAll)();
    console.log(phoneArray);
    const requiredPage = page || 1;
    const requiredSize = size || 10;
    if (requiredPage > 1) {
        return (yield phoneArray).slice((requiredPage - 1) * requiredSize, requiredPage * requiredSize);
    }
    return (yield phoneArray).slice(0, requiredSize);
});
exports.getByPagination = getByPagination;
