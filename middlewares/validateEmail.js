// const { isValidEmail } = require('../validations/validations');

const regexEmail = (email) => {
  const response = /\S+@\S+\.\S+/;
  return response.test(email);
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: '"email" is required' });
  const regex = regexEmail(email);
  if (!regex) return res.status(400).json({ message: '"email" must be a valid email' });
  next();
};
module.exports = validateEmail;