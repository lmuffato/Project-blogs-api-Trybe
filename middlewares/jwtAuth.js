const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.SECRET;

const validateToken = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ message: 'missing auth token' });

    try {
        const tokenPayload = jwt.verify(authorization, secret);
        req.user = tokenPayload;
        next();
    } catch (e) {
        return res.status(401).json({ message: 'jwt malformed' });
    }
};

module.exports = validateToken;