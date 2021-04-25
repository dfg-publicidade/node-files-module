"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
/* Module */
class Files {
    static async getJson(dir) {
        try {
            // eslint-disable-next-line no-bitwise
            fs_extra_1.default.accessSync(dir, fs_extra_1.default.constants.R_OK);
        }
        catch (err) {
            throw new Error(`File not found or not accessible: ${dir}`);
        }
        return JSON.parse(fs_extra_1.default.readFileSync(dir, 'utf-8'));
    }
}
exports.default = Files;
