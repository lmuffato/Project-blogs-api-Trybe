const jwt = require('jsonwebtoken');

const jwtSecret = 'passwordNivelHard';

const addErro = (message, status) => ({ message, status });

const creteToken = ({ dataValues }) => {
  const token = jwt.sign(dataValues, jwtSecret);
  return token;
};

const validateToken = (token) => {
  if (!token) throw addErro('Token not found', 401);

  try {
    jwt.verify(token, jwtSecret);
  } catch (_err) {
    throw addErro('Expired or invalid token', 401);
  }
};

const validateTokenAndReturnId = (token) => {
  if (!token) throw addErro('Token not found', 401);

  let idUser;
  try {
    const { id } = jwt.verify(token, jwtSecret);
    idUser = id;
  } catch (_err) {
    throw addErro('Expired or invalid token', 401);
  }

  return idUser;
};

module.exports = {
  addErro,
  creteToken,
  validateToken,
  validateTokenAndReturnId,
};
