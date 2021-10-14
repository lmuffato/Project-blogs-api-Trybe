const Joi = require('joi');

const validateCategoty = (req, res, next) => {
  const { name } = req.body;
  const response = Joi.string().required().validate(name);
  if (response.error) {
    return res.status(400).json({ message: '"name" is required' });
  }
  next();
};

module.exports = validateCategoty;