const { NAME_IS_REQUIRED } = require('../utils/errorMessages');

const checkName = (name) => {
  if (!name) throw NAME_IS_REQUIRED;
};

const validateCategory = (req, _res, next) => {
  checkName(req.body.name);
  next();
};

module.exports = validateCategory;