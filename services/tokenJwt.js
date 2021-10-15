const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const createToken = (payload) => {
    const token = jwt.sign(payload, JWT_SECRET);
    return token;
};

const validateToken = (token) => {
    if (!token) return { status: 401, message: 'Token not found' };
    try {
        jwt.verify(token, JWT_SECRET);
    } catch (err) {
     console.log(err);
     return { status: 401, message: 'Expired or invalid token' };
    }
};

module.exports = {
    createToken,
    validateToken,
};