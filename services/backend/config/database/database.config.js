import { createPool } from "mysql";
const config = require("./config");
const CONFIG = config[process.env.NODE_ENV || "dev"];

const CONNECTION_POOL = createPool({
  host: CONFIG.host,
  port: CONFIG.port,
  user: CONFIG.username,
  password: CONFIG.password,
  database: CONFIG.database,
});

export { CONFIG, CONNECTION_POOL };
