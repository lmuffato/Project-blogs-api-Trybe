const { userSchema } = require('../schemas/userSchema');
const { STATUS_BAD_REQUEST } = require('../utils/msg');

const userValidation = (req, res, next) => {
  const newUser = req.body;
  const { error } = userSchema.validate(newUser);
  if (error) {
    console.log(error);
    return res.status(STATUS_BAD_REQUEST).json({
      message: error.details[0].message,
    });
  }
  return next();
};

module.exports = userValidation;
