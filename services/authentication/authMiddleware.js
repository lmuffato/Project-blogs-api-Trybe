const jwt = require('jsonwebtoken');

require('dotenv').config(); // Configura o uso de variáveis de ambiente

const { User } = require('../../models');

// Chave secreta usada para encriptografar os dados.
const secret = process.env.JWT_SECRET;

const jwtConfig = (timeToExpires, algorithCript) => {
  const config = { expiresIn: timeToExpires, algorithm: algorithCript };
  return config;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (err) {
    throw new Error('Expired or invalid token');
  }
};

const verifyUserExists = async (input, field) => {
  const obj = { [field]: input };
  const result = await User.findOne({ where: obj });
  if (result === null || !result) { throw new Error('Expired or invalid token'); }
};

// Middleware que gera o token com base nas informações do usuário
const tokenGenerator = async (req, res, _next) => {
  const { displayName, email, image } = req.userInfo;
  const { code } = req.http;
  const obj = { displayName, email, image };
  const token = jwt.sign(obj, secret, jwtConfig('7d', 'HS256'));
  return res.status(code).json({ token });
};

const verifyEmptyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (!token) return res.status(401).json({ message: 'Token not found' });
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
  next();
};

const tokenValidation = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const decoded = verifyToken(token);
    await verifyUserExists(decoded.email, 'email');
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

module.exports = {
  tokenGenerator,
  verifyEmptyToken,
  tokenValidation,
};
