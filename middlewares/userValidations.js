const { User } = require('../models');
const {
  invDisplayName,
  invPassword,
  ifPasswordExists,
  invEmail,
  ifEmailExists,
  userEmailExists,
  HTTP_400,
  HTTP_409,
} = require('../helpers');

const displayValidation = (req, res, next) => {
  const { displayName } = req.body;
  const minimumAmount = 8;

  if (displayName.length < minimumAmount) {
    return res.status(HTTP_400).json(invDisplayName);
  }
  next();
};

const passwordValidation = (req, res, next) => {
  const { password } = req.body;
  const minimumAmount = 6;
  if (!password) {
    return res.status(HTTP_400).json(ifPasswordExists);
  }
  if (password.length < minimumAmount) {
    return res.status(HTTP_400).json(invPassword);
  }

  next();
};

const emailValidation = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = new RegExp(/^[\w.]+@[a-z]+.\w{2,3}$/g);
  if (!email) {
    return res.status(HTTP_400).json(ifEmailExists);
  }
  if (!emailRegex.test(email)) {
    return res.status(HTTP_400).json(invEmail);
  }
  next();
};

const alreadyExists = async (req, res, next) => {
  const { email } = req.body;
  const findEmail = await User.findOne({ where: { email } });
  if (findEmail) {
    return res.status(HTTP_409).json(userEmailExists);
  }
  next();
};

module.exports = {
  displayValidation,
  passwordValidation,
  emailValidation,
  alreadyExists,
};