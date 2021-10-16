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

/* const usuarioLogin = async (login) => {
  const { email, password } = login;
  const emailExiste = await buscarEmail(email);
  if (!emailExiste) return 'não existe';
  const { password, ...dadosUsuario } = await Users.findOne({ where: { email } });
  return novoToken(dadosUsuario);
}; */

const usuarioLogin = async (dadosLogin) => {
  const { email } = dadosLogin;
  const emailExiste = await buscarEmail(email);
  if (emailExiste === null) return null;
  
  return novoToken(dadosLogin);
};

module.exports = {
  criarUsuario,
  usuarioLogin,
};