const { displayNameLessThanEight } = require('../utils/errorMap');

const validateDisplayName = (req, _res, next) => {
  const { displayName } = req.body;
  if (!displayName || typeof displayName !== 'string' || displayName.length < 8) {
    next(displayNameLessThanEight.error);
  }

  next();
};

module.exports = { validateDisplayName };
