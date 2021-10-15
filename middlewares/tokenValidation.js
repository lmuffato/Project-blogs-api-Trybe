const jwt = require('jsonwebtoken');
require('dotenv').config();

function tokenValidation(req, res, next) {
    const { authorization } = req.headers;

    if (authorization === undefined) {
    return res.status(401).json({ message: 'missing auth token' });
    }

    try {
    const payload = jwt.verify(authorization, process.env.JWT_SECRET);

    req.payload = payload;
    return next();
    } catch (err) {
    return res.status(401).json({ message: 'jwt malformed' });
    }
}

module.exports = { tokenValidation }; 
