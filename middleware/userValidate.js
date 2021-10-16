const { userSchema } = require('./schemas/userSchema');

const userValidate = (request, response, next) => {
  const user = request.body;
  const { error } = userSchema.validate(user);
  if (error) return response.status(400).json({ message: error.details[0].message });
  return next();
};

module.exports = userValidate;
