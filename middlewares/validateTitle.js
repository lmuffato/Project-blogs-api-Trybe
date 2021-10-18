const { titleIsRequired } = require('../utils/errorMap');

const validateTitle = (req, _res, next) => {
  const { title } = req.body;
  if (!title || typeof title !== 'string') {
    next(titleIsRequired.error);
  }

  next();
};

module.exports = { validateTitle };
