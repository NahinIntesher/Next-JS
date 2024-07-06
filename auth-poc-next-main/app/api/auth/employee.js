import pool from "@/app/utils/mysql";
export default async function handler(req, res) {
  try {
    const connection = await pool.getConnection();
    console.log("Connected to Database!");

    const [rows] = await connection.execute("SELECT * FROM employee");

    connection.release();
    console.log("Disconnected from Database!");
    console.log("Data fetched: ", rows);
    res.status(200).json(rows);
  } catch (error) {
    console.error("Database error:", error); // Added error logging
    res.status(500).json({ error: "Internal Server Error" });
  }
}
