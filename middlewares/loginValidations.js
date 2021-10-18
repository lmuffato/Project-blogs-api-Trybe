const {
  HTTP_400,
  ifEmailIsEmpty,
  ifEmailExists,
  ifPasswordIsEmpty,
  ifPasswordExists,
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

module.exports = {
  emailEmpty,
  passwordEmpty,
};