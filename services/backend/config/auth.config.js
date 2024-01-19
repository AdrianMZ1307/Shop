module.exports = {
  secret: process.env.JWT_SECRET,
  expiredTime: process.env.TOKEN_TIMEOUT,
};
