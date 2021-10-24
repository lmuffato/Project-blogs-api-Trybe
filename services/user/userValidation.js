const { User } = require('../../models');

const verifyEmptyInput = (input, field) => { 
  if (!input || input === null || input === '') {
    throw new Error(`"${field}" is required`);
  }
  return false;
};

const verifyLenghInputMustBeEqual = (input, minimumLength, field) => {
  if (input.length !== minimumLength) {
    throw new Error(`"${field}" length must be ${minimumLength} characters long`);
  }
  return false;
};

const verifyMinimumInputLength = (input, minimumLength, field) => {
  if (input.length < minimumLength) {
    throw new Error(`"${field}" length must be at least ${minimumLength} characters long`);
  }
  return false;
};

const verifyValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    throw new Error('"email" must be a valid email');
  }
  return false;
};

const verifyEmailAlreadyExists = async (email) => {
  const result = await User.findOne({ where: { email } });
  if (result !== null) { throw new Error('User already registered'); }
  return false;
};

const nameValidation = async (req, res, next) => {
  const { displayName } = req.body;
  const name = displayName;
  console.log(name);
  try {
    verifyEmptyInput(displayName, 'displayName');
    verifyMinimumInputLength(displayName, 8, 'displayName');
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
  next();
};

// Middleware para validação do password
const passwordValidation = async (req, res, next) => {
  const { password } = req.body;
  try {
    verifyEmptyInput(password, 'password');
    verifyLenghInputMustBeEqual(password, 6, 'password');
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
  next();
};

// Middleware para validação do email
const emailValidation = async (req, res, next) => {
  const { email } = req.body;
  try {
    verifyEmptyInput(email, 'email');
    verifyValidEmail(email);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
  next();
};

const emailAlreadyExists = async (req, res, next) => {
  const { email } = req.body;
  try {
    await verifyEmailAlreadyExists(email);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
  next();
};

module.exports = {
  nameValidation,
  passwordValidation,
  emailValidation,
  emailAlreadyExists,
};
