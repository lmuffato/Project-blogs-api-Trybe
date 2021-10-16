const error = {
  lengthMust: '"displayName" length must be at least 8 characters long',
  emailIsRequired: '"email" is required',
  regexValid: '"email" must be a valid email',
  passwordIsRequired: '"password" is required',
  passwordLength: '"password" length must be 6 characters long',
};

const validName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) return res.status(400).json({ message: error.lengthMust });
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

const validEmail = [validEmailRequired, validEmailRegex];
const validPassword = [validPasswordRequired, validPasswordLength];
module.exports = {
  validName,
  validEmail,
  validPassword,
};