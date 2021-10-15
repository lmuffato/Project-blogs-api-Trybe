const database = require('../models');

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'email is required' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    .test(email)) return res.status(400).json({ message: 'email must be a valid email' });
  const doUserExists = database.User.findOne({ where: { email } });
  console.log(doUserExists);
  if (doUserExists) return res.status(409).json({ message: 'User already registered' });
  next();
};

const validateName = (req, res, next) => {
  const { displayName } = req.body;
  if (!displayName) return res.status(400).json({ message: 'displayName is required' });
  if (displayName.length < 8) { 
    return res.status(400)
    .json({ message: 'displayName length must be at least 8 characters long' });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) return res.status(400).json({ message: 'password is required' });
  if (password.length < 6) {
    return res.status(400).json({ message: 'password length must be 6 characters long' });
  }
  next();
};

module.exports = {
  validateEmail,
  validateName,
  validatePassword,
};
