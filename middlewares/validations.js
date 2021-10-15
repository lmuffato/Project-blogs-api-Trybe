const HTTP_STATUS = require('./httpStatus');
const ERRORS = require('./errorMsg');

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(HTTP_STATUS.BAD_REQUEST).json(ERRORS.invalidName);
  }
  next();
};

module.exports = {
  validateDisplayName,
};
