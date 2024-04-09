import pg from 'pg';

const { Pool } = pg;

const user = 'postgres';
const password = 'Asp_170100';
const host = 'localhost';
const port = 5432;
const database = 'fusion-facilities';

const connection = new Pool({
  user,
  password,
  host,
  port,
  database
});



export default connection;