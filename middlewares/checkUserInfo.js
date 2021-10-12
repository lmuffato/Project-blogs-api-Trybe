const { User } = require('../models');

const validateName = (displayName, minimum) => {
  if (displayName.length < minimum) {
    return ({ status: 400, message: '"displayName" length must be at least 8 characters long' });
  }

  return false;
};

const validateEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;

  if (!email) {
    return ({ status: 400, message: '"email" is required' });
  }

  if (!regex.test(email)) {
    return ({ status: 400, message: '"email" must be a valid email' });
  }

  return false;
};

const validatePassword = (password, minimum) => {
  if (!password) {
    return ({ status: 400, message: '"password" is required' });
  }

  if (password.length < minimum) {
    return ({ status: 400, message: '"password" length must be 6 characters long' });
  }

  return false;
};

const validateUser = async (email) => {
  const user = await User.findOne({ where: { email } });

  if (user) {
    return ({ status: 409, message: 'User already registered' });
  }

  return false;
};

const checkInfo = async (req, res, next) => {
  const { displayName, email, password } = req.body;

  const validatedName = validateName(displayName, 8);

  if (validatedName.status) {
    return res.status(validatedName.status).json({ message: validatedName.message }); 
  }
  
  const validatedEmail = validateEmail(email);

  if (validatedEmail.status) {
    return res.status(validatedEmail.status).json({ message: validatedEmail.message }); 
  }

  const validatedPassword = validatePassword(password, 6);

  if (validatedPassword.status) {
    return res.status(validatedPassword.status).json({ message: validatedPassword.message }); 
  }

  const validatedUser = await validateUser(email);

  if (validatedUser.status) {
    return res.status(validatedUser.status).json({ message: validatedUser.message }); 
  }

  next();
};

module.exports = { checkInfo };
