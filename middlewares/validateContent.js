const { contentIsRequired } = require('../utils/errorMap');

const validateContent = (req, _res, next) => {
  const { content } = req.body;
  if (!content || typeof content !== 'string') {
    next(contentIsRequired.error);
  }

  next();
};

module.exports = { validateContent };
