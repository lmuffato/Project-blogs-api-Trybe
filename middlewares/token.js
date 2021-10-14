// Token similar ao que utilizei no projeto Cookmaster

const jwt = require('jsonwebtoken');

const SENHA = process.env.SENHA || 'ProjetoDoBloco29';

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const novoToken = (dadosUsuario) => {
  const usuariotoken = jwt.sign(dadosUsuario, SENHA, jwtConfig);
  return usuariotoken;  
};

const validarToken = async (request, response, next) => {
  try {  
  const usuarioToken = request.headers.authorization;
  if (!usuarioToken) {
    return response.status(401).json({ message: 'Token not found' });
  }

  const tokenVerificado = jwt.verify(usuarioToken, SENHA);
    response.user = tokenVerificado;
    next();
  } catch (err) {
    return response.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  novoToken,
  validarToken,
};