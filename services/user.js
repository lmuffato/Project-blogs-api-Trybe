require('dotenv').config();
const jwt = require('jsonwebtoken');

const { 
    validateDisplayName, 
    validateEmail, 
    validatePassword } = require('../validations/userValidations');

const MESSAGE = require('../util/Message');

const jwtConfig = {
    expiresIn: '20m',
    algorithm: 'HS256',
};

const secret = process.env.SECRET;

const createUser = async (displayName, email, password, _image) => {

    const displayNameResponse = validateDisplayName(displayName);
    if (displayNameResponse !== MESSAGE.success) return displayNameResponse;

    if (!email) return MESSAGE.emailNotExists;
    const emailResponse = await validateEmail(email);

    if (emailResponse !== MESSAGE.success) return emailResponse;

    const passwordResponse = validatePassword(password);
    if (passwordResponse !== MESSAGE.success) return passwordResponse;

    const tokenPayload = { displayName, email };

    const token = jwt.sign(tokenPayload, secret, jwtConfig);

    return { status: 201, token };
};

module.exports = {
    createUser,
};