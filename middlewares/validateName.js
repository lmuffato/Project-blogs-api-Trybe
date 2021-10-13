const Joi = require('joi');

const validateName = (req, res, next) => {
  const { displayName } = req.body;

  const response = Joi.string().required().min(8).validate(displayName);

  if (response.error) {
    return res
      .status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  next();
};

module.exports = validateName;