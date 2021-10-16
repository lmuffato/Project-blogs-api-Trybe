const { Users } = require('../models');
const { novoToken } = require('../middlewares/token');

const buscarEmail = async (email) => {
  const buscar = await Users.findOne({ where: { email } });
  return buscar;
};

const criarUsuario = async (usuario) => {
  const { email } = usuario;
  const emailExiste = await buscarEmail(email);
  if (emailExiste) return 'existe';
  const { password, ...dadosUsuario } = await Users.create(usuario);
  return novoToken(dadosUsuario);
};

const usuarioLogin = async (dadosLogin) => {
  const { email } = dadosLogin;
  const emailExiste = await buscarEmail(email);
  if (emailExiste === null) return null;
  
  return novoToken(dadosLogin);
};

const buscarUsuarios = async () => {
  const usuarios = await Users.findAll();
  return usuarios;
};

const buscarUsuarioPorID = async (id) => {
  const usuario = await Users.findByPk(id);
  if (!usuario) return undefined;
  const { password, ...dadosUsuario } = usuario.dataValues;
  return dadosUsuario;
};

module.exports = {
  criarUsuario,
  usuarioLogin,
  buscarUsuarios,
  buscarUsuarioPorID,
};