import client from "../database";

export class Category {
  id?: number;
  name?: string;
}
export class Categories {
  async index(): Promise<Category[]> {
    try {
      const con = await client.connect();
      const sql = "SELECT * FROM categories;";
      const result = await con.query(sql);
      con.release();
      return result.rows;
    } catch (error) {
      throw `error while fetching categories 
      ${error}`;
    }
  }
  async show(id: number): Promise<Category> {
    try {
      const con = await client.connect();
      const sql = `SELECT * FROM categories where id=${id};`;
      const result = await con.query(sql);
      con.release();
      return result.rows[0];
    } catch (erro) {
      throw `error while fetch category:${id}
       ${erro}`;
    }
  }
  async create(cat: Category): Promise<Category | null> {
    try {
      if (cat.name == null || cat.name === "") {
        throw "name value is null or empty";
      }
      const con = await client.connect();
      const sql = `INSERT INTO categories (name) VALUES ($1) returning *;`;
      const result = await con.query(sql, [cat.name]);
      con.release();
      return result.rows[0];
    } catch (erro) {
      throw `error while create category 
      ${erro}`;
    }
  }
}
