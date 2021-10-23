const { User } = require('../../models');

const empytName = (name) => { 
  if (!name
      || name === null
      || name === ''
      || typeof name !== 'string') { return true; }
  return false;
};

const tooShortInput = (input, minimumLength) => { 
  if (input.length < minimumLength) { return true; }
  return false;
};

// Middleware para validação do nome
const nameValidation = async (req, res, next) => {
  const { displayName } = req.body;
  const name = displayName;
  console.log(name);
  try {
    if (empytName(name)) throw new Error('"displayName" is required');
    if (tooShortInput(name, 8)) {
      throw new Error(
      '"displayname" length must be at least 8 character long',
      );
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

const empytPassword = (password) => { 
  if (!password
      || password === null
      || password === ''
      || typeof password !== 'string') { return true; }
  return false;
};

// Middleware para validação do password
const passwordValidation = async (req, res, next) => {
  const { password } = req.body;
  try {
    if (empytPassword(password)) throw new Error('"password" is required');
    if (tooShortInput(password, 6)) throw new Error('"password" length must be 6 characters long');
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

const empytEmail = (email) => { 
  if (!email) { return true; }
  return false;
};

function invalidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !regex.test(email);
}

// Middleware para validação do email
const emailValidation = async (req, res, next) => {
  const { email } = req.body;
  try {
    if (empytEmail(email)) {
      throw new Error('"email" is required');
    }
    if (invalidEmail(email)) {
      throw new Error('"email" must be a valid email');
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

// Função que veririca se o email já existe (se é repetido);
const emailAlreadyExists = async (email) => {
  const result = await User.findOne({ where: { email } });
  if (result !== null) { return true; }
  if (result === null) { return false; }
};

// Middleware que verifica se o email já existe
const emailUniqueValidation = async (req, res, next) => {
  const { email } = req.body;
  try {
    if (await emailAlreadyExists(email)) {
      throw new Error('User already registered');
    }
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
  next();
};

module.exports = { nameValidation, passwordValidation, emailValidation, emailUniqueValidation };
