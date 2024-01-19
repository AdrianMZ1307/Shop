// Packages
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

// Variables
const config = require("../config/config");
const basename = path.basename(__filename);
const CONFIG = config[process.env.NODE_ENV || "dev"];
const db = {};

// Configuration
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], {
    host: CONFIG.host,
    port: CONFIG.port,
    dialect: CONFIG.dialect,
  });
} else {
  sequelize = new Sequelize(CONFIG.database, CONFIG.username, CONFIG.password, {
    host: CONFIG.host,
    port: CONFIG.port,
    dialect: CONFIG.dialect,
  });
}
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) == ".js"
    );
  })
  .sort()
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
