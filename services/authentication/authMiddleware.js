const jwt = require('jsonwebtoken');

require('dotenv').config(); // Configura o uso de variáveis de ambiente

const { User } = require('../../models');

// Chave secreta usada para encriptografar os dados.
const secret = process.env.JWT_SECRET;

const jwtConfig = (timeToExpires, algorithCript) => {
  const config = { expiresIn: timeToExpires, algorithm: algorithCript };
  return config;
};

const verifyEmptyToken = (input) => { 
  if (!input || input === null || input === '') {
    throw new Error('Token not found');
  }
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (err) {
    throw new Error('Expired or invalid token');
  }
};

const verifyUserExists = async (field, input) => {
  const result = await User.findOne({ where: { field: input } });
  if (result !== null) { throw new Error('Expired or invalid token'); }
};

// Middleware que gera o token com base nas informações do usuário
const tokenGenerator = async (req, res, _next) => {
  const { displayName, email, image } = req.userInfo;
  const obj = { displayName, email, image };
  const token = jwt.sign(obj, secret, jwtConfig('7d', 'HS256'));
  return res.status(201).json({ token });
};

// Middleware verifica se o token é válido
const tokenValidation = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    verifyEmptyToken(token);
    const decoded = verifyToken(token);
    await verifyUserExists('email', decoded.email);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
};

module.exports = {
  tokenGenerator,
  tokenValidation,
};
