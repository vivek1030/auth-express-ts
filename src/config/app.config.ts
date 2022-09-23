import dotenv from "dotenv";

dotenv.config();

const server = {
  PORT: process.env.PORT || 3000,
};

const database = {
  DB_DRIVER: process.env.DB_DRIVER || "mysql",
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_NAME: process.env.DB_NAME || "mydb",
  DB_USERNAME: process.env.DB_USERNAME || "root",
  DB_PASSWORD: process.env.DB_PASSWORD || "",
};

const appConfig = {
  PASSWORD_SALTKEY: "1Z2TuI&p#@",
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || "gX-~^s7FBUeVHLE",
};

export default {
  server: server,
  database: database,
  internal: appConfig,
};
