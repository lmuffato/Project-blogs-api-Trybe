const { loginJoi } = require('./schema/loginJoi');

const validateLogin = (req, res, next) => {
  const { error } = loginJoi.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  
  next();
};

module.exports = validateLogin;
