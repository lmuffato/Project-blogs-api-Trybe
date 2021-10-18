const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const createUser = async (displayName, email, password, image) => {
  const credentials = {
    email,
  };

  const token = await jwt.sign(credentials, secret);
  console.log('console.log do token', token);
  await User.create({ displayName, email, password, image });

  return token;
};

const loginUser = async (email) => {
  const credentials = {
    email,
  };
  
  const token = await jwt.sign(credentials, secret);

  return token;
};

module.exports = {
  createUser,
  loginUser,
};
  
  // const criarUsuario = async (usuario) => {
  // const { email } = usuario;
  // const emailExiste = await buscarEmail(email);
  // if (emailExiste) return 'existe';
  // const { password, ...dadosUsuario } = await Users.create(usuario);
  // return novoToken(dadosUsuario);
  // };