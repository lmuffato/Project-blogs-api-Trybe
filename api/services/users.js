const { User } = require('../models');
const { clientErrors } = require('../utils/httpStatusCodes');
const newError = require('../utils/createErrorMessage');

const existUser = async (email) => {
    const user = await User.findOne({ where: { email } });
    return user;
};

const createUser = async (userData) => {
    const { displayName, email, password, image } = userData;
    const existUserEmail = await existUser(email);
    if (existUserEmail) return newError('User already registered', clientErrors.conflict);

    const createdUser = await User.create({ displayName, email, password, image });
    return createdUser;
};

module.exports = { existUser, createUser };