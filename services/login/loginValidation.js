const verifyEmptyInput = (input, field) => { 
  if (!input || input === null || input === '') {
    throw new Error(`"${field}" is required`);
  }
};

const verifyMissingFileds = (input, field) => {
    if (!input) { throw new Error(`"${field}" is not allowed to be empty`); }
};

// Middleware para validação do password
const passwordValidation = async (req, res, next) => {
  const { password } = req.body;
  try {
    verifyMissingFileds(password, 'password');
    verifyEmptyInput(password, 'password');
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

// Middleware para validação do email
const emailValidation = async (req, res, next) => {
  const { email } = req.body;
  try {
    verifyMissingFileds(email, 'email');
    verifyEmptyInput(email, 'email');
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

module.exports = { passwordValidation, emailValidation };
