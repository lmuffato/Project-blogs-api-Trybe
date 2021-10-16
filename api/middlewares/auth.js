const jwt = require('jsonwebtoken');
const { clientErrors } = require('../utils/httpStatusCodes');
const { getUserById } = require('../services/users');
const newError = require('../utils/createErrorMessage');

const secret = process.env.JWT_SECRET;
const { unauthorized } = clientErrors;

const tokenNotFound = newError('Token not found', unauthorized);
const expiredOrInvalidToken = newError('Expired or invalid token', unauthorized);
const validateToken = async (req, _res, next) => {
    const { authorization: token } = req.headers;

    if (!token) return next(tokenNotFound);

    try {
        const decoded = jwt.verify(token, secret);
        const { id } = decoded;
        const user = await getUserById(id);

        if (user.message) return next(expiredOrInvalidToken);
        req.userId = id;
        return next();
    } catch (error) {
        return next(expiredOrInvalidToken);
    }
};

module.exports = validateToken;