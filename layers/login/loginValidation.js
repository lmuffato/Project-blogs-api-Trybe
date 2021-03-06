const verifyEmptyInput = (input, field) => { 
  if (input === '') {
    throw new Error(`"${field}" is not allowed to be empty`);
  }
};

const verifyMissingFileds = (input, field) => {
    if (!input) { throw new Error(`"${field}" is required`); }
};

// Middleware para validação do password
const passwordValidation = async (req, res, next) => {
  const { password } = req.body;
  try {
    verifyEmptyInput(password, 'password');
    verifyMissingFileds(password, 'password');
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

// Middleware para validação do email
const emailValidation = async (req, res, next) => {
  const { email } = req.body;
  try {
    verifyEmptyInput(email, 'email');
    verifyMissingFileds(email, 'email');
    req.http = { code: 200 };
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

module.exports = { passwordValidation, emailValidation };
