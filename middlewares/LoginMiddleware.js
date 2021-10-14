const { Users } = require('../models');

const validateEmailLogin = async (req, res, next) => {
  const { email } = req.body;
  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  const findEmail = await Users.findOne({ where: { email } });
  if (!findEmail) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  next();
};

const validatePasswordLogin = async (req, res, next) => {
  const { password } = req.body;
  if (password === '') {
    return res.status(400).json({ 
      message: '"password" is not allowed to be empty',
    });
  }
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  const findPassword = await Users.findOne({ where: { password } });
  if (!findPassword) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  next();
};

module.exports = {
  validateEmailLogin,
  validatePasswordLogin,
};