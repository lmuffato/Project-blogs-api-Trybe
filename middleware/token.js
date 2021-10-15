const SECRET = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');
require('dotenv').config();

function newToken(user) {
const { password: _, ...payload } = user;
const jwtConfig = {
algorithm: 'HS256',
expiresIn: '5d',
};
const token = jwt.sign(payload, SECRET, jwtConfig);
return { token };
}

module.exports = { newToken };
