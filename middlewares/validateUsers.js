const database = require('../models');

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: '"email" is required' });
  if (email === '') return res.status(400).json({ message: '"email" is not allowed to be empty' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    .test(email)) return res.status(400).json({ message: '"email" must be a valid email' });
  const doUserExists = await database.Users.findOne({ where: { email } });
  if (doUserExists) return res.status(409).json({ message: 'User already registered' });
  next();
};

const validateLoginEmail = async (req, res, next) => {
  const { email } = req.body;
  if (email === '') return res.status(400).json({ message: '"email" is not allowed to be empty' });
  if (!email) return res.status(400).json({ message: '"email" is required' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    .test(email)) return res.status(400).json({ message: '"email" must be a valid email' });
  next();
};

const validateName = (req, res, next) => {
  const { displayName } = req.body;
  if (!displayName) return res.status(400).json({ message: '"displayName" is required' });
  if (displayName.length < 8) { 
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  if (!password) return res.status(400).json({ message: '"password" is required' });
  if (password.length < 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

const validateExistingUser = async (req, res, next) => {
  const { id } = req.params;
  const user = await database.Users
    .findOne({ where: { id } });
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  next();
};

module.exports = {
  validateEmail,
  validateName,
  validatePassword,
  validateLoginEmail,
  validateExistingUser,
};
