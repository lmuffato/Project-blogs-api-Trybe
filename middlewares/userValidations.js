const jwtFunctions = require('../auth/jwtFunctions');

const error = {
  lengthMust: '"displayName" length must be at least 8 characters long',
  emailIsNot: '"email" is not allowed to be empty',
  emailIsRequired: '"email" is required',
  regexValid: '"email" must be a valid email',
  passwordIsNot: '"password" is not allowed to be empty',
  passwordIsRequired: '"password" is required',
  passwordLength: '"password" length must be 6 characters long',
};

const validName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) return res.status(400).json({ message: error.lengthMust });
  next();
};

const validEmailExist = (req, res, next) => {
  const { email } = req.body;
  if (email === '') return res.status(400).json({ message: error.emailIsNot });
  next();
};

const validEmailRequired = (req, res, next) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: error.emailIsRequired });
  next();
};

const validEmailRegex = (req, res, next) => {
  const { email } = req.body;
  const regex = /[^@]+@[^.]+\..+/g;
  if (!regex.test(email)) return res.status(400).json({ message: error.regexValid });
  next();
};

const validPasswordExist = (req, res, next) => {
  const { password } = req.body;
  if (password === '') return res.status(400).json({ message: error.passwordIsNot });
  next();
};

const validPasswordRequired = (req, res, next) => {
  const { password } = req.body;
  if (!password) return res.status(400).json({ message: error.passwordIsRequired });
  next();
};

const validPasswordLength = (req, res, next) => {
  const { password } = req.body;
  if (password.length !== 6) return res.status(400).json({ message: error.passwordLength });
  next();
};

const verifyToken = (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const authUser = jwtFunctions.verify(token);
    req.user = authUser;
    next();
  } catch (_err) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

const validEmail = [validEmailExist, validEmailRequired, validEmailRegex];
const validPassword = [validPasswordExist, validPasswordRequired, validPasswordLength];
module.exports = {
  validName,
  validEmail,
  validPassword,
  verifyToken,
};