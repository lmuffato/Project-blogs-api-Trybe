require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const takeToken = (token) => {
    console.log(token);
    console.log(SECRET);
    try {
        const payload = jwt.verify(token, SECRET);        
        return payload;
    } catch (e) {
        return false;
    }
};

module.exports = takeToken;