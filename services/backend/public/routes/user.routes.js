const express = require('express');

const router = express.Router();
const controller = require('../../controllers').user;

//* Register a user
router.post('/signup/', controller.register);
//* Login a user
router.post('/signin/', controller.login);

module.exports = router;