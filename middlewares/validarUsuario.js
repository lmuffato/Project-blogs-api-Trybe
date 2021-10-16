const { usuarioSchema } = require('./schemas/usuarioSchema');

const validarUsuario = (request, response, next) => {
  const usuario = request.body;
  const { error } = usuarioSchema.validate(usuario);
  if (error) return response.status(400).json({ message: error.details[0].message });

  return next();
};

module.exports = validarUsuario;