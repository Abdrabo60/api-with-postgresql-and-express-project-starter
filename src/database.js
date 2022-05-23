"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
const { DATABASE_HOST, DATABASE_NAME, DATABASE_NAME_TEST, DATABASE_USER, DATABASE_PASSWORD, ENV, } = process.env;
let client;
if (ENV == "test") {
    client = new pg_1.Pool({
        host: DATABASE_HOST,
        database: DATABASE_NAME_TEST,
        user: DATABASE_USER,
        password: DATABASE_PASSWORD,
    });
}
else {
    client = new pg_1.Pool({
        host: DATABASE_HOST,
        database: DATABASE_NAME,
        user: DATABASE_USER,
        password: DATABASE_PASSWORD,
    });
}
exports.default = client;
