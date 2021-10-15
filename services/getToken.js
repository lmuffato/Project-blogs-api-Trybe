require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const getToken = (payload) => {
    console.log(payload);
    const token = jwt.sign({ payload }, SECRET);
    return token;
};

module.exports = getToken;