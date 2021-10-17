const { loginSchema } = require('./schemas/loginSchema');

const validarLogin = (request, response, next) => {
  const { error } = loginSchema.validate(request.body);
  if (error) return response.status(400).json({ message: error.details[0].message });
  
  next();
};

module.exports = validarLogin;