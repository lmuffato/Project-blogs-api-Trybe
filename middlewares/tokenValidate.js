const jwt = require('jsonwebtoken');
const { Users } = require('../models');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const tokenValidate = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return next({ code: 401, message: 'Token not found' });
  }

  try {
    const verifyToken = jwt.verify(authorization, secret);

    const validateUser = await Users.findOne({
      where: { email: verifyToken.email },
    });

    if (!validateUser) {
      return next({ code: 401, message: 'Erro ao procurar usuário do token.' });
    }
    const { _id, password, ...user } = verifyToken;

    req.validateUser = { id: _id, ...user };

    next();
  } catch (error) {
    return next({ code: 401, message: 'Expired or invalid token' });
  }
};

module.exports = { tokenValidate };
