const { takeToken } = require('../services');

const NOT_FOUND = { message: 'Token not found' };
const INVALID = { message: 'Expired or invalid token' };

const validateToken = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json(NOT_FOUND);
    const isValid = await takeToken(authorization);
    if (!isValid) return res.status(401).json(INVALID);
    console.log('saiu do validator');
    next();
};

module.exports = validateToken;