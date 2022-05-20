import client from "../database";

export type Category = {
  id: number;
  name: string;
};
export class Categories {
  async index(): Promise<Category[]> {
    try {
      const con = await client.connect();
      const sql = "SELECT * FROM categories;";
      const result = await con.query(sql);
      con.release();
      return result.rows;
    } catch (error) {
      throw new Error(`error while fetching categories ${error}`);
    }
  }
}
