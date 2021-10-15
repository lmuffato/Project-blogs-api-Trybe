const token = require('../services/tokenJwt');

const validateName = (req, res, next) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: '"name" is required' });
    next();
};

const validateTokenFn = (req, res, next) => {
    const { authorization } = req.headers;
    const validateToken = token.validateToken(authorization);
    if (validateToken) {
        return res.status(validateToken.status).json({ message: validateToken.message });
    }
    next();
};

module.exports = {
    validateName,
    validateTokenFn,
};