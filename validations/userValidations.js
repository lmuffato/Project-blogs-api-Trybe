const MESSAGE = require('../util/Message');
const { User } = require('../models');

const filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

const validateDisplayName = (displayName) => {
    if (displayName.length < 8) return MESSAGE.displayNameNotValid;
    return MESSAGE.success;
};

const validateEmail = async (email) => {
    if (!filter.test(email)) return MESSAGE.emailNotValid;

    const findUser = await User.findOne({ where: { email } });
    console.log(findUser);
    if (findUser !== null) return MESSAGE.emailAlreadyExists;

    return MESSAGE.success;
};

const validatePassword = (password) => {
    if (!password) return MESSAGE.passwordNotExists;
    if (password.length < 6) return MESSAGE.passwordNotValid;
    return MESSAGE.success;
};

const checkEmptyFields = (email, password) => {
    if (email === '') return { status: 400, message: '"email" is not allowed to be empty' };
    if (password === '') return { status: 400, message: '"password" is not allowed to be empty' };
    return false;
};

module.exports = { validateDisplayName, validateEmail, validatePassword, checkEmptyFields };