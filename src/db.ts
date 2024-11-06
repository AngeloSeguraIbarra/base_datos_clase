import mysql from "mysql2/promise";
import { ConnectionOptions } from "mysql2";
import DotenvFlow from "dotenv-flow";

DotenvFlow.config();

const configOptions: ConnectionOptions = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: Number(process.env.MYSQL_PORT) || 3306,
};

// un pool genera un conexion abierta para seguir trabajando
const pool = mysql.createPool(configOptions);

// donde lo importemos siempre va a ser lo mismo
export default pool;
