const { loginSchema } = require('./schemas/userSchema');

module.exports = (req, res, next) => {
  const user = req.body;

  const { error } = loginSchema.validate(user);

  if (error) {
    return next({ code: 400, message: error.details[0].message });
  }
  next();
};