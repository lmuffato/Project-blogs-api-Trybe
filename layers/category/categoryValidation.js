// const { User } = require('../../models');
// const { Category } = require('../../models');

const verifyMissingFileds = (input, field) => {
  if (!input) { throw new Error(`"${field}" is required`); }
  return false;
};

const verifyEmptyInput = (input, field) => { 
  if (input === '') {
    throw new Error(`"${field}" is required`);
  }
  return false;
};

// Middleware para validação do email
const verifyInputs = async (req, res, next) => {
  const { name } = req.body;
  try {
    verifyMissingFileds(name, 'name');
    verifyEmptyInput(name, 'name');
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
  next();
};

module.exports = {
  verifyInputs,
};
