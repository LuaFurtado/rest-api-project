// import pg from 'pg'
// const { Pool } = pg
 
// const pool = new Pool()
 
// // the pool will emit an error on behalf of any idle clients
// // it contains if a backend error or network partition happens
// pool.on('error', (err, client) => {
//   console.error('Unexpected error on idle client', err)
//   process.exit(-1)
// })
 
// const client = await pool.connect()
// const res = await client.query('SELECT * FROM users WHERE id = $1', [1])
// console.log(res.rows[0])
 
// client.release()

import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "tpl925_6",
  host: "localhost",
  database: "books_api",
  password: "",
  port: 5432,
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(1);
});

export default pool;
