import { createPool } from "mysql2/promise";
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
} from "./config.js";
import { Sequelize } from "sequelize";

// Basic
export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
});

//Generate Sequelize Instance
export const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  pool: {
    max: 5, // Maximum number of connections
    min: 0, // Minimum number of connections
    acquire: 30000, // Maximum time (ms) Sequelize will try to get a connection before throwing error
    idle: 10000, // Maximum time (ms) a connection can be idle before being released
  },
});

// Synchronize the database in development mode only
if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "dev") {
  sequelize
    .sync({ alter: true })
    .then(() => {
      console.log("Database Synchronized Successfully.");
    })
    .catch((error) => {
      console.error("Error Synchronizing database: ", error);
    });
}
