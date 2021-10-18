const { loginSchema } = require('./schemas/loginSchema');

const loginValidation = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  console.log(error);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};

module.exports = loginValidation;
