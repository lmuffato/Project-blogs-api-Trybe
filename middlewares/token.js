/* const jwt = require('jsonwebtoken');

const SECRET = 'mimimi';

function newToken(user) {
const { password: _, ...payload } = user;
const jwtConfig = {
algorithm: 'HS256',
expiresIn: '1d',
};
const token = jwt.sign(payload, SECRET, jwtConfig);
return { token };
}

module.exports = { newToken }; */
