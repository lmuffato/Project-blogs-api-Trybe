const usuarioServices = require('../services/usuarioServices');

const criarUsuario = async (request, response) => {
  const usuario = await usuarioServices.criarUsuario(request.body);
  if (usuario === 'existe') {
    return response.status(409).json({ message: 'User already registered' });
  }
  
  return response.status(201).json(usuario);
};

const usuarioLogin = async (request, response) => {
  const { email, password } = request.body;
  const dadosLogin = { email, password };

  const login = await usuarioServices.usuarioLogin(dadosLogin);
  if (login === null) {
    return response.status(400).json({ message: 'Invalid fields' });
  }

  return response.status(200).json(login);
};

const buscarUsuarios = async (_request, response) => {
  const usuarios = await usuarioServices.buscarUsuarios();
  return response.status(200).json(usuarios);
};

const buscarUsuarioPorID = async (request, response) => {
  const { id } = request.params;
  const usuario = await usuarioServices.buscarUsuarioPorID(id);
  if (usuario === undefined) {
    return response.status(404).json({ message: 'User does not exist' });
  }

  return response.status(200).json(usuario);
};

module.exports = {
  criarUsuario,
  usuarioLogin,
  buscarUsuarios,
  buscarUsuarioPorID,
};