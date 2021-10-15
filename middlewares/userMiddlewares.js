const { User } = require('../models');

const validateDisplayNameLength = (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  next();
};

const validateEmail = async (req, res, next) => {
  const regexEmailTest = /\S+@\S+\.\S+/;
  const { email } = req.body;
  const regexResult = regexEmailTest.test(email);

  if (!email) {
    return res.status(400).json({
      message: '"email" is required',
    });
  }
  if (!regexResult) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }
  next();
};

const checkExistingEmail = async (req, res, next) => {
  const { email } = req.body;
  const findEmail = await User.findOne({ where: { email } });

  if (findEmail !== null) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }
  next();
};

const validadePassword = async (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({
      message: '"password" is required',
    });
  }
  if (password.length !== 6) {
    return res.status(400).json({
      message: '"password" length must be 6 characters long',
    });
  }
  next();
};

module.exports = {
  validateDisplayNameLength,
  validateEmail,
  checkExistingEmail,
  validadePassword,
};
