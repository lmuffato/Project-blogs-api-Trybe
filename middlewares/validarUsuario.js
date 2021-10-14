const { usuarioSchema } = require('./schemas/usuarioSchema');

const validarUsuario = (req, res, next) => {
  const usuario = req.body;
  const { error } = usuarioSchema.validate(usuario);
  if (error) return res.status(400).json({ message: error.details[0].message });
  
  return next();
};

module.exports = validarUsuario;