const MESSAGE = require('../util/Message');
const { User } = require('../models');

const validateDisplayName = (displayName) => {
    if (displayName.length < 8) return MESSAGE.displayNameNotValid;
    return MESSAGE.success;
};

const validateEmail = async (email) => {
    if (!email.includes('@') 
    || !email.includes('.com') 
    || email[0] === '@') return MESSAGE.emailNotValid;

    const findUser = await User.findOne({ where: { email } });
    if (findUser !== null) return MESSAGE.emailAlreadyExists;

    return MESSAGE.success;
};

const validatePassword = (password) => {
    if (password.length < 6) return MESSAGE.passwordNotValid;
    return MESSAGE.success;
};

module.exports = { validateDisplayName, validateEmail, validatePassword };