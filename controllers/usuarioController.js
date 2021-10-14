const usuarioServices = require('../services/usuarioServices');

const criarUsuario = async (request, response) => {
  const usuario = await usuarioServices.criarUsuario(request.body);
  if (usuario === 'existe') {
    return response.status(409).json({ message: 'User already registered' });
  }
  
  return response.status(201).json(usuario);
};

module.exports = {
  criarUsuario,
};