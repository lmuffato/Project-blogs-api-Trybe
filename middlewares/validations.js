const jwt = require('jsonwebtoken');
const HTTP_STATUS = require('./httpStatus');
const ERRORS = require('./errorMsg');
const { getByEmail } = require('../controllers/users');

const SECRET = process.env.JWT_SECRET;

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (!displayName || displayName.length < 8) {
    return res.status(HTTP_STATUS.BAD_REQUEST).json(ERRORS.invalidName);
  }
  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const regex = /^[\w.]+@[a-z]+\.\w{2,3}$/g;
  
  if (email === '') return res.status(HTTP_STATUS.BAD_REQUEST).json(ERRORS.blanckEmail);
  if (!email) return res.status(HTTP_STATUS.BAD_REQUEST).json(ERRORS.emailRequired);
  const validEmail = regex.test(email);
  if (!validEmail) return res.status(HTTP_STATUS.BAD_REQUEST).json(ERRORS.invalidEmail);
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (password === '') return res.status(HTTP_STATUS.BAD_REQUEST).json(ERRORS.blanckPassword);
  if (!password) return res.status(HTTP_STATUS.BAD_REQUEST).json(ERRORS.passwordRequired);
  if (password.length < 6) {
    return res.status(HTTP_STATUS.BAD_REQUEST).json(ERRORS.invalidPassword);
  }
  next();
};

const findEmail = async (req, res, next) => {
  const { email } = req.body;
  const [result] = await getByEmail({ email });
  if (result) return res.status(HTTP_STATUS.CONFLICT).json(ERRORS.duplicatedEmail);
  next();
};

const authToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(HTTP_STATUS.UNAUTHORIZED).json(ERRORS.noToken);
  try {
    const { dbEmail: email } = jwt.verify(token, SECRET);
    const [result] = await getByEmail({ email });
    const { id } = result.dataValues;
    req.user = id;
    next();
  } catch (e) {
    return res.status(HTTP_STATUS.UNAUTHORIZED).json(ERRORS.badToken);
  }
};

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(HTTP_STATUS.BAD_REQUEST).json(ERRORS.noName);
  next();
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
  findEmail,
  authToken,
  validateName,
};
