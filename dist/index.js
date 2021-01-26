"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
/* Module */
class Files {
    static getJson(dir) {
        return JSON.parse(fs_extra_1.default.readFileSync(dir, 'utf-8'));
    }
}
exports.default = Files;
