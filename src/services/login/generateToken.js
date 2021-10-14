const jwt = require('jsonwebtoken');

const { User } = require('../../models');

const { JWT_SECRET } = process.env;

module.exports = async (email, password) => {
  const userSearch = await User.findOne({ where: { email, password } });

  if (!userSearch) return { status: 400, message: 'invalid fields' };

  const { password: _, ...userPayload } = userSearch;

  const token = jwt.sign(userPayload, JWT_SECRET, { 
    algorithm: 'HS256',
    expiresIn: '15d',
  });

  return { status: 200, token };
};