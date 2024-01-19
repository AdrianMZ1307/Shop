const express = require("express");
// -------------------------------------------
const user_routes = require("./user.routes");

async function configureRoutes({ router }) {
  router.get("/", (req, res) => {
    res.status(200).send({ response: `Example Message` });
  });
  
  router.use(express.static("../assets/images"));
  router.use(express.static("../../upload"));
  router.use("/api", user_routes);
}

module.exports = { configureRoutes };
