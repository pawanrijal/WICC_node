const jwt = require("jsonwebtoken");

const KEY = "secret";

const generateToken = ({ id }) => {
  try {
    let token = jwt.sign(
      {
        sub: id,
      },
      KEY,
      { expiresIn: 90000 }
    );
    return token;
  } catch (err) {
    next(err);
  }
};

module.exports = generateToken;
