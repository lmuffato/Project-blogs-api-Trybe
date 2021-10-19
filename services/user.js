require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { 
    validateDisplayName, 
    validateEmail, 
    validatePassword, 
    checkEmptyFields,
    } = require('../validations/userValidations');

const MESSAGE = require('../util/Message');

const jwtConfig = {
    expiresIn: '20m',
    algorithm: 'HS256',
};

const secret = process.env.SECRET;

const createUser = async (displayName, email, password, image) => {
    const displayNameResponse = validateDisplayName(displayName);
    if (displayNameResponse !== MESSAGE.success) return displayNameResponse;

    if (!email) return MESSAGE.emailNotExists;
    const emailResponse = await validateEmail(email);

    if (emailResponse !== MESSAGE.success) return emailResponse;

    const passwordResponse = validatePassword(password);
    if (passwordResponse !== MESSAGE.success) return passwordResponse;

    const tokenPayload = { displayName, email, image };
    const token = jwt.sign(tokenPayload, secret, jwtConfig);
    return { status: 201, token };
};

const loginUser = async (email, password) => {
    if (email === undefined) return MESSAGE.emailNotExists;
    if (password === undefined) return MESSAGE.passwordNotExists;

    const isEmpty = checkEmptyFields(email, password);
    if (isEmpty) return isEmpty;

    const findUser = await User.findOne({ where: { email, password } });
    if (!findUser) return MESSAGE.invalidFields;

    const userId = findUser.dataValues.id;
    
    const tokenPayload = { userId, email };
    const token = jwt.sign(tokenPayload, secret, jwtConfig);

    return { status: 200, message: token };
};

module.exports = {
    createUser,
    loginUser,
};