/*
const jwt = require('jsonwebtoken');
const usersServices = require('../users/usersServices');

// Chave secreta usada para encriptografar os dados.
const secret = 'meuTokenSecreto';

// Middleware que gera o token com base nas informações do usuário
const tokenGenerator = async (req, res, _next) => {
  const { password, ...userInfo } = req.user; // Desestrutura o objeto em duas partes: a primeira propriedade "password" e ...userInfo que contem o resto das propriedades
  const jwtConfig = {
    expiresIn: '7d', // tempo pelo qual esse token será válido (1d = 1 dia, 1h = 1 hora, 1m = 1 minuto );
    algorithm: 'HS256', // Algoritmo utilizado para assinar o token
  };
  const token = jwt.sign(userInfo, secret, jwtConfig);
  return res.status(200).json({ token });
};

const emptyToken = (token) => {
  if (!token
      || token === ''
      || token === null
      || token === undefined) { return true; }
  return false;
  };

const verifyToken = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return '';
  }
};

// Middleware verifica se o token é válido
const tokenValidation = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (emptyToken(token)) { return res.status(401).json({ message: 'missing auth token' }); }
    const decoded = verifyToken(token);
    // const decoded = jwt.verify(token, secret); // O método verify, verifica a validação e decodificar o token JWT. Caso o token esteja expirado, a própria biblioteca irá retornar um erro.   
    const user = await usersServices.getByProperty('email', decoded.email); // Se o token é válido, buscar o usuário no bando de dados.
    if (!user || user === null) { throw new Error('jwt malformed'); }
    const { _id: userId, role } = user;
    req.userInfo = { userId, role }; // Disponibilizando o user para outros middlewares
    next();
  } catch (err) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
};

module.exports = { tokenGenerator, tokenValidation };
*/