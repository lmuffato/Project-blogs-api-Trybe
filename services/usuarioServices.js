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

module.exports = {
  criarUsuario,  
};