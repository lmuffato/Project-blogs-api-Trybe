const { categorySchema } = require('../schemas/categorySchema');
const { STATUS_BAD_REQUEST } = require('../utils/msg');

const categoryValidation = (req, res, next) => {
  const addCategory = req.body;
  const { error } = categorySchema.validate(addCategory);
  if (error) {
    return res.status(STATUS_BAD_REQUEST).json({
      message: error.details[0].message,
    });
  }
  return next();
};

module.exports = categoryValidation;