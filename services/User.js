const jwt = require('jsonwebtoken');
const { validateEmail, validatePassword, validateUser } = require('./validations');

const SECRET = 'aiiipapaiii';

const create = async (displayName, email, password, image) => {
  const validUser = validateUser(displayName);
  if (validUser) return validUser;
  const validPassword = validatePassword(password);
  if (validPassword) return validPassword;
  const validEmail = await validateEmail(email);
  if (validEmail) return validEmail;
  const user = { displayName, email, password, image };
  const { password: _, ...userPayload } = user;
  const token = jwt.sign(userPayload, SECRET);
  return { code: 201, token };
};

module.exports = { create };
