import client from "../database";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
const { BCRYPT_PASSWORD, SALT_ROUNDS, JWT_SECRET } = process.env;

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  password: string;
};
export class Users {
  async index(): Promise<User[]> {
    try {
      const con = await client.connect();
      const sql = "SELECT * FROM users ;";
      const result = await con.query(sql);
      con.release();
      return result.rows;
    } catch (error) {
      throw new Error(`error while fetching users 
      ${error}`);
    }
  }
  async show(id: number): Promise<User> {
    try {
      const con = await client.connect();
      const sql = `SELECT * FROM users where id=$1;`;
      const result = await con.query(sql, [id]);
      con.release();
      return result.rows[0];
    } catch (erro) {
      throw new Error(`error while fetch user:${id}
       ${erro}`);
    }
  }
  async create(u: User): Promise<string | null> {
    try {
      if (
        u.first_name == null ||
        u.last_name == null ||
        u.password == null ||
        u.first_name === "" ||
        u.last_name === "" ||
        u.password === ""
      ) {
        throw "user name or password is empty ";
      }
      const con = await client.connect();
      const sql =
        "INSERT INTO users (first_name,last_name,password) VALUES ($1,$2,$3) returning * ;";
      console.log(u.password + BCRYPT_PASSWORD);
      const hash = bcrypt.hashSync(
        u.password + BCRYPT_PASSWORD,
        parseInt(SALT_ROUNDS + "")
      );
      console.log(hash);
      const result = await con.query(sql, [u.first_name, u.last_name, hash]);
      con.release();
      var token = jwt.sign({ user: result }, JWT_SECRET + "");
      return token;
    } catch (erro) {
      console.log(`error while create users
       ${erro}`);
      return null;
    }
  }

  async login(u: User): Promise<string | null> {
    try {
      if (
        u.first_name == null ||
        u.last_name == null ||
        u.password == null ||
        u.first_name === "" ||
        u.last_name === "" ||
        u.password === ""
      ) {
        throw "user name or password is empty ";
      }
      const con = await client.connect();
      const sql = "select password from users where first_name=$1;";
      const result = await con.query(sql, [u.first_name]);
      const password = result.rows[0].password;
      con.release();
      const cmp = bcrypt.compareSync(u.password + BCRYPT_PASSWORD, password);
      if (!cmp) {
        return "password error";
      }
      var token = jwt.sign({ user: u }, JWT_SECRET + "");
      return token;
    } catch (erro) {
      console.log(`error while login
       ${erro}`);
      return null;
    }
  }
}
