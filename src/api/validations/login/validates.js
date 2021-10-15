const {
  HTTP_BAD_REQUEST,
} = require('../../status');

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const messageOne = '"email" is required';
  const messageTwo = '"email" is not allowed to be empty';
  
  if (email === undefined) return res.status(HTTP_BAD_REQUEST).json({ message: messageOne });

  if (email.length === 0) return res.status(HTTP_BAD_REQUEST).json({ message: messageTwo });

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  const messageOne = '"password" is required';
  const messageTwo = '"password" is not allowed to be empty';

  if (password === undefined) return res.status(HTTP_BAD_REQUEST).json({ message: messageOne });

  if (password.length === 0) return res.status(HTTP_BAD_REQUEST).json({ message: messageTwo });

  next();
};

module.exports = {
  validateEmail,
  validatePassword,
};