const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const createToken = (payload) => {
    const token = jwt.sign(payload, JWT_SECRET);
    return token;
};

module.exports = {
    createToken,
};