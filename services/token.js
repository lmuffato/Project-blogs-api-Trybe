const { JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');

const getEmailWithToken = (token) => jwt.verify(token, JWT_SECRET, (_err, decoded) => decoded.name);

module.exports = { getEmailWithToken };