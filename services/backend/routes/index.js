async function configureRoutes({ router }) {
  router.get("/", (req, res) => {
    res.status(200).send({ response: `Example Message` });
  });
}

module.exports = { configureRoutes };
