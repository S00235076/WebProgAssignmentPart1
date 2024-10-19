"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateUser = void 0;
const joi_1 = __importDefault(require("joi"));
const ValidateUser = (user) => {
    const contactJoiSchema = joi_1.default.object({
        name: joi_1.default.string().min(3).required(),
        phonenumber: joi_1.default.string().min(10),
        email: joi_1.default.string().email().required(),
    });
    return contactJoiSchema.validate(user);
};
exports.ValidateUser = ValidateUser;
