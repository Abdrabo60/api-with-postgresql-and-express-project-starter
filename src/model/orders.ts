import client from "../database";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
const { BCRYPT_PASSWORD, SALT_ROUNDS, JWT_SECRET } = process.env;

export type Order = {
  id: number;
  product_id: number;
  quantity: number;
  user_id: number;
  status: boolean;
};
export class Orders {
  async currentOrders(user_id: number): Promise<Order[] | null> {
    try {
      if (user_id == null || user_id == 0) {
        throw "user id in null or 0";
      }
      const con = await client.connect();
      const sql = "SELECT * FROM Orders where user_id=$1 and status=false;";
      const result = await con.query(sql, [user_id]);
      con.release();
      return result.rows;
    } catch (error) {
      console.log(`error while fetching current orders for user:${user_id} 
      ${error}`);
      return null;
    }
  }
  async completedOrders(user_id: number): Promise<Order> {
    try {
      const con = await client.connect();
      const sql = `SELECT * FROM Orders where user_id=$1 and status ;`;
      const result = await con.query(sql, [user_id]);
      con.release();
      return result.rows[0];
    } catch (erro) {
      throw new Error(`error while fetch completed order for user :${user_id}
       ${erro}`);
    }
  }
}
