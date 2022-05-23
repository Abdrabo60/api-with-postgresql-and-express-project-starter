import env from "dotenv";
import { Pool } from "pg";
env.config();

const {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_NAME_TEST,
  DATABASE_USER,
  DATABASE_PASSWORD,
  ENV,
} = process.env;

let client: Pool;
if (ENV == "test") {
  client = new Pool({
    host: DATABASE_HOST,
    database: DATABASE_NAME_TEST,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
  });
} else {
  client = new Pool({
    host: DATABASE_HOST,
    database: DATABASE_NAME,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
  });
}

export default client;
