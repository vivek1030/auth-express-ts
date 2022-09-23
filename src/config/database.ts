import { Sequelize } from "sequelize";
import config from "./app.config";

const DB_HOST = config.database.DB_HOST;
const DB_DRIVER: any = config.database.DB_DRIVER;
const DB_NAME = config.database.DB_NAME;
const DB_USERNAME = config.database.DB_USERNAME;
const DB_PASSWORD = config.database.DB_PASSWORD;

export const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DRIVER,
});
