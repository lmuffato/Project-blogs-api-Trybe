const jwt = require('jsonwebtoken');
const { Users } = require('../models');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const authToken = async (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return next({ code: 401, message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);
 
    const user = await Users.findOne({ where: { email: decoded.email } });

    if (!user) {
      return next({ code: 401, message: 'Erro ao procurar usuário do token.' });
    }
    
    const { _id, password, ...userWithOutPasswor } = decoded;

    req.user = { id: _id, ...userWithOutPasswor };

    next();
  } catch (err) {
    return next({ code: 401, message: 'Expired or invalid token' });
  }
};

module.exports = authToken;
