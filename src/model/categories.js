"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categories = void 0;
const database_1 = __importDefault(require("../database"));
class Categories {
    async index() {
        try {
            const con = await database_1.default.connect();
            const sql = "SELECT * FROM categories;";
            const result = await con.query(sql);
            con.release();
            return result.rows;
        }
        catch (error) {
            throw new Error(`error while fetching categories 
      ${error}`);
        }
    }
    async show(id) {
        try {
            const con = await database_1.default.connect();
            const sql = `SELECT * FROM categories where id=${id};`;
            const result = await con.query(sql);
            con.release();
            return result.rows[0];
        }
        catch (erro) {
            throw new Error(`error while fetch category:${id}
       ${erro}`);
        }
    }
    async create(name) {
        try {
            const con = await database_1.default.connect();
            const sql = `INSERT INTO categories (name) VALUES ('${name}');`;
            const result = await con.query(sql);
            con.release();
            return result.rows[0];
        }
        catch (erro) {
            throw new Error(`error while create category
       ${erro}`);
        }
    }
}
exports.Categories = Categories;
