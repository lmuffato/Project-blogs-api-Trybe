// Token similar ao que utilizei no projeto Cookmaster

const jwt = require('jsonwebtoken');

const SENHA = process.env.SENHA || 'ProjetoDoBloco29';

const jwtConfig = {
  expiresIn: '5h',
  algorithm: 'HS256',
};

const novoToken = (dadosUsuario) => {
  const usuariotoken = jwt.sign(dadosUsuario, SENHA, jwtConfig);
  return { token: usuariotoken };  
};

const validarToken = async (request, response, next) => {
  const usuarioToken = request.headers.authorization;
  if (!usuarioToken) {
    return response.status(401).json({ message: 'Token not found' });
  }
  
  try {
    const { tokenVerificado } = jwt.verify(usuarioToken, SENHA);
    request.user = tokenVerificado;
    next();
  } catch (err) {
    return response.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  novoToken,
  validarToken,
};