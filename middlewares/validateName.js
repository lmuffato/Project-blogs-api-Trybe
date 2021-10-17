const { nameIsRequired } = require('../utils/errorMap');

const validateName = (req, _res, next) => {
  const { name } = req.body;
  if (!name) {
    next(nameIsRequired.error);
  }

  next();
};

module.exports = { validateName };
