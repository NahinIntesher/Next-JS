import mysql from "mysql";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default function dbConnect() {
  pool.getConnection((err, connection) => {
    if (err) {
      return console.error("Error acquiring client", err.stack);
    }
    connection.query("SELECT * FROM employee", (err, result) => {
      connection.release();
      if (err) {
        return console.error("Error executing query", err.stack);
      }
      console.log("Connected to DB!");
    });
  });
}
