//* Packages
const cors = require("cors");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//* Imports
const models = require("./models");
const routes = require("./public/routes");

//* Server configuration
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.urlencoded({ extended: true }));

//* Endpoint configuration
routes.configureRoutes({ router: app });

//* Database configuration
models.sequelize.sync().catch((error) => {
  console.log(error);
  logger.error(`A database error has appear ${error}`);
});

//* Starting the server
app.listen(PORT, async () => {
  let users = await models.user.count();
  if (users === 0) {
    const User = models.user;
    let placeholder_data = require("./public/assets/data/user.js");
    placeholder_data["data"].forEach((user) => {
      User.create(user);
    });
  }
  console.log(`The server is running on port ${PORT}`);
});
