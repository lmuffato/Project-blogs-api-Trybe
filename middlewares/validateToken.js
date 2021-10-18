const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');

const secret = 'quedeliciaestarnatrybe';

module.exports = rescue(async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token not found' });

    try {
        const decoded = jwt.verify(token, secret);

        req.payload = decoded.data;

        next();
    } catch (err) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
});