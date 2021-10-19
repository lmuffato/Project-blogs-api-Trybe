const jwt = require('jsonwebtoken');
const loginSchema = require('../schemas/loginSchema');
const { User } = require('../models');

const secret = 'quedeliciaestarnatrybe';

const logIn = async (email, password) => {
    const emailValidate = await loginSchema.validateEmail(email);
    const passwordValidate = loginSchema.validatePassword(password);

    if (emailValidate) return emailValidate;
    if (passwordValidate) return passwordValidate;

    const jwtConfig = {
        expiresIn: '1d',
        algorithm: 'HS256',
    };

    const getUser = await User.findOne({ where: { email } });
    const token = jwt.sign({ data: getUser }, secret, jwtConfig); 

    return { token };
};

module.exports = {
    logIn,
};