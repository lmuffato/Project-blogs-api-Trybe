const { User } = require('../models');

const validadeRequiredFields = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ 
      message: '"email" is required',
    });
  }
  if (!password) {
    return res.status(400).json({ 
      message: '"password" is required', 
    });
  }
  next();
};

const validadeNotAllowedEmpty = async (req, res, next) => {
  const { email, password } = req.body;

  if (email === '') {
    return res.status(400).json({
      message: '"email" is not allowed to be empty',
    });
  }
  if (password === '') {
    return res.status(400).json({
      message: '"password" is not allowed to be empty',
    });
  }
  next();
};

const checkExistingUser = async (req, res, next) => {
  const { email } = req.body;
  const findEmail = await User.findOne({ where: { email } });

  if (findEmail === null) {
    return res.status(400).json({
      message: 'Invalid fields',
    });
  }
  next();
};

module.exports = {
  validadeRequiredFields,
  validadeNotAllowedEmpty,
  checkExistingUser,
};
