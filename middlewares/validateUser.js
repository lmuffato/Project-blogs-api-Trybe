require('dotenv/config');
const jwt = require('jsonwebtoken');
const { schemaCreateUser, schemaLogin } = require('../validations/validations');

const secret = process.env.JWT_SECRET;

const validationCreateUser = async (req, res, next) => {
  const { error } = schemaCreateUser.validate(req.body);
  if (error) {
    return res.status(400)
    .json({ message: error.message });
  }
    next();
};

const validationLogin = async (req, res, next) => {
  const { error } = schemaLogin.validate(req.body);
  if (error) {
    return res.status(400)
    .json({ message: error.message });
  }
    next();
};

const validationtoken = async (req, res, next) => {
  const { authorization } = req.headers;
  
  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    const validToken = jwt.verify(authorization, secret);
    req.user = validToken;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validationCreateUser,
  validationLogin,
  validationtoken,
}; 