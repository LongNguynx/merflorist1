import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'merflorist_db',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

let pool = null;
let isConnected = false;

try {
  pool = mysql.createPool(dbConfig);
} catch (error) {
  console.warn('[DB Warning] MySQL pool could not be initialized:', error.message);
}

export async function testConnection() {
  if (!pool) return false;
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS result');
    isConnected = true;
    console.log('[DB] Connected to MySQL database successfully!');
    return true;
  } catch (error) {
    console.warn('[DB] MySQL is not reachable or database not imported yet:', error.message);
    console.info('[DB] Backend will serve data reliably via Built-in Model layer.');
    isConnected = false;
    return false;
  }
}

export function isDbConnected() {
  return isConnected;
}

export default pool;
