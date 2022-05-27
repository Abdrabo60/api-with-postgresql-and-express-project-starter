import client from "../database";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
const { BCRYPT_PASSWORD, SALT_ROUNDS, JWT_SECRET } = process.env;

export type Product = {
  id: number;
  name: string;
  price: number;
  category_id: number;
};
export class Products {
  async index(): Promise<Product[]> {
    try {
      const con = await client.connect();
      const sql = "SELECT * FROM products;";
      const result = await con.query(sql);
      con.release();
      return result.rows;
    } catch (error) {
      throw new Error(`error while fetching products 
      ${error}`);
    }
  }
  async show(id: number): Promise<Product> {
    try {
      const con = await client.connect();
      const sql = `SELECT * FROM products where id=$1;`;
      const result = await con.query(sql, [id]);
      con.release();
      return result.rows[0];
    } catch (erro) {
      throw new Error(`error while fetch product:${id}
       ${erro}`);
    }
  }
  async byCategory(category_id: number): Promise<Product> {
    try {
      const con = await client.connect();
      const sql = `SELECT * FROM products where category_id=$1;`;
      const result = await con.query(sql, [category_id]);
      con.release();
      return result.rows[0];
    } catch (erro) {
      throw new Error(`error while fetch product by category:${category_id}
       ${erro}`);
    }
  }
  async create(p: Product): Promise<string | null> {
    try {
      if (p.name == null || p.price == null || p.name === "" || p.price === 0) {
        throw "product name or price is empty ";
      }
      const con = await client.connect();
      const sql =
        "INSERT INTO products (name,price,category_id) VALUES ($1,$2,$3) returning * ;";
      const result = await con.query(sql, [p.name, p.price, p.category_id]);
      con.release();
      return result.rows[0];
    } catch (erro) {
      console.log(`error while create product
       ${erro}`);
      return null;
    }
  }
}
