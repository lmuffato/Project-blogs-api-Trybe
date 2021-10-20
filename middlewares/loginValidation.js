const { Users } = require('../models');

const validLoginEmail = async (req, res, next) => {
  const { email } = req.body;

  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }

  next();
};

const validLoginPassword = async (req, res, next) => {
  const { password } = req.body;

  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  next();
};

const validUser = async (req, res, next) => {
  const { email, password } = req.body;
  const find = await Users.findOne({ where: { email, password } });

  if (!find) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  next();
};

module.exports = {
  validLoginEmail,
  validLoginPassword,
  validUser,
};