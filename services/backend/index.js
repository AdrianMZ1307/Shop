//* PACKAGES
const express = require("express");
const app = express();
const routes = require("./routes/");

//* CONFIGURATION OF AN ENDPOINT
routes.configureRoutes({ router: app });

//* STARTING SERVER
app.listen(3000, () => {
  console.log("Server started");
});
