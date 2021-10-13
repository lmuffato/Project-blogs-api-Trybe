const Joi = require('joi');

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (password === undefined) return res.status(400).json({ message: '"password" is required' });
  if (password.length === 0) {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  const response = Joi.string().required().min(6).validate(password);
  if (response.error) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

module.exports = validatePassword;