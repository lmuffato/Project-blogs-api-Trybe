const { User } = require('../models');
const {
  HTTP_400,
  ifEmailIsEmpty,
  ifEmailExists,
  ifPasswordIsEmpty,
  ifPasswordExists,
  invFields,
} = require('../helpers');

const emailEmpty = (req, res, next) => {
  const { email } = req.body;
  if (email === undefined) { 
    return res.status(HTTP_400).json(ifEmailExists);
  }
  if (email === '') {
    return res.status(HTTP_400).json(ifEmailIsEmpty);
  }
  next();
};

const passwordEmpty = (req, res, next) => {
  const { password } = req.body;
  if (password === undefined) {
    return res.status(HTTP_400).json(ifPasswordExists);
  }
  if (password === '') {
    return res.status(HTTP_400).json(ifPasswordIsEmpty);
  }
  next();
};

const UserExists = async (req, res, next) => {
  const { email } = req.body;
  const findEmail = await User.findOne({ WHERE: { email } });
  if (!findEmail) {
    return res.status(HTTP_400).json(invFields);
  }
  next();
};

module.exports = {
  emailEmpty,
  passwordEmpty,
  UserExists,
};