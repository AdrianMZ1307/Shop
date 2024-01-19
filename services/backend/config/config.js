module.exports = {
  test: {
    app_port: 3001,
    TOKEN_TIMEOUT: "24h",
    logging: false,
    // MySQL
    username: "root",
    password: "root",
    database: "test",
    host: "localhost",
    port: 3307,
    dialect: "mysql",
  },
  dev: {
    app_port: 3000,
    TOKEN_TIMEOUT: "24h",
    // MySQL
    username: "root",
    password: "root",
    database: "database",
    host: "mysql",
    port: 3306,
    dialect: "mysql",
  },
  pre: {
    app_port: 3000,
    TOKEN_TIMEOUT: "24h",
    // MySQL
    username: "root",
    password: "root",
    database: "database",
    host: "localhost",
    port: 3306,
    dialect: "mysql",
  },
  pro: {
    app_port: process.env.APP_PORT || 3000,
    TOKEN_TIMEOUT: process.env.TOKEN_TIMEOUT || "24h",
    logging: false,
    // MySQL
    username: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "root",
    database: process.env.MYSQL_DATABASE || "database",
    host: process.env.MYSQL_HOST || "localhost",
    port: process.env.MYSQL_PORT || 3306,
    dialect: "mysql",
  },
};
