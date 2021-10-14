const { loginSchema } = require('../schemas/loginSchema');
const { STATUS_BAD_REQUEST } = require('../utils/msg');

const loginValidation = (req, res, next) => {
  const user = req.body;
  const { error } = loginSchema.validate(user);
  if (error) {
    return res.status(STATUS_BAD_REQUEST).json({
      message: error.details[0].message,
    });
  }
  return next();
};

module.exports = loginValidation;