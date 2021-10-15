const errorMap = require('../utils/errorMap');

const isValidDisplayName = (displayName) => {
  if (!displayName || typeof displayName !== 'string' || displayName.length < 8) {
    return errorMap.nameLessThanEight;
  }

  return { ok: true };
};

const isValidEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;

  if (!email) return errorMap.emailIsRequired;
  
  if (!regex.test(email)) return errorMap.emailMustBeValid;

  return { ok: true };
};

const isValidPassword = (password) => {
  if (!password) return errorMap.passwordIsRequired;

  if (password.length !== 6) return errorMap.passwordOtherThanSix;

  return { ok: true };
};

const validateCreateUserForm = (req, _res, next) => {
  const { displayName, email, password } = req.body;
  
  const nameResult = isValidDisplayName(displayName);
  if (!nameResult.ok) next(nameResult.error);
  
  const emailResult = isValidEmail(email);
  if (!emailResult.ok) next(emailResult.error);
  
  const passwordResult = isValidPassword(password);
  if (!passwordResult.ok) next(passwordResult.error);

  next();
};

module.exports = { validateCreateUserForm };
