const HTTP_STATUS = require('./httpStatus');
const ERRORS = require('./errorMsg');
const { getByEmail } = require('../controllers/users');

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
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
  const [result] = await getByEmail(email);
  if (result) return res.status(HTTP_STATUS.CONFLICT).json(ERRORS.duplicatedEmail);
  next();
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
  findEmail,
};
