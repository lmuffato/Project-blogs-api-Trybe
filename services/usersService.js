const jwt = require('jsonwebtoken');
const userSchema = require('../schemas/usersSchema');
const { User } = require('../models');

const secret = 'quedeliciaestarnatrybe';

const createUser = async (displayName, email, password, image) => {
    const userDisplayNameValid = userSchema.validateDisplayName(displayName);
    const userEmailValid = await userSchema.validateEmail(email);
    const userPasswordValid = userSchema.validatePassword(password);
    
    if (userDisplayNameValid) return userDisplayNameValid;
    if (userEmailValid) return userEmailValid;
    if (userPasswordValid) return userPasswordValid;

    await User.create({
        displayName, email, password, image,
    });

    const jwtConfig = {
        expiresIn: '1d', algorithm: 'HS256',
    };

    const getUser = await User.findOne({ where: { email } });
    const token = jwt.sign({ data: getUser }, secret, jwtConfig);

    return { token };
};

module.exports = {
    createUser,
};