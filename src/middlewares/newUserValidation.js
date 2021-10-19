const { newUserSchema } = require('./schemas/userSchema');

module.exports = async (req, res, next) => {
  const user = req.body;
  const { error } = newUserSchema.validate(user);

  if (error) {
    return next({ code: 400, message: error.details[0].message });
  }

  next();
};