const db = require("../models/");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

const User = db.user;

//* Login a user
async function login(data) {
  let user = await User.findOne({
    where: {
      username: data.username,
    },
  }).catch((err) => {
    if (err.status) {
      return { message: err.message };
    }
    return { message: err.message };
  });

  if (!user) {
    return {
      status: 204,
      message: "[Error] User not found",
    };
  }

  var pwdIsValid = bcrypt.compareSync(data.password, user.password);

  if (!pwdIsValid) {
    return {
      accessToken: null,
      status: 400,
      message: "[Error] Invalid Password",
    };
  }
  var token = "";
  if (process.env.NODE_ENV != "test") {
    token = jwt.sign(
      {
        id: user.id,
        role_id: user.role_id,
      },
      config.secret,
      {
        expiresIn: config.expiredTime,
      }
    );
  }

  return {
    status: 200,
    id: user.id,
    username: user.username,
    accessToken: token,
  };
}

//* Register a user
async function register(data) {
  await User.create({
    username: data.username,
    password: bcrypt.hashSync(data.password, 8),
    role_id: data.role_id,
  })
    .then((user) => {
      if (user) {
        return {
          status: 200,
          message: "[Success] The user was registered successfully",
        };
      }
    })
    .catch((err) => {
      if (err.status) {
        return {
          status: err.status,
          message: "[Error] " + err.message,
        };
      }
      return {
        status: 500,
        message: "[Error] " + err.message,
      };
    });
}

module.exports = {
  login,
  register,
};
