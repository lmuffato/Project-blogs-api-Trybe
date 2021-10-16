const { User } = require('../models');
const { generateToken } = require('./tokenSecurity');

const createUser = async (user) => {
    const userOrNull = await User.findOne({ where: { email: user.email } });
    if (userOrNull !== null) throw new Error('User already registered');
    const userSaved = await User.create({ ...user });
    return !!userSaved;
};

const signIn = async (login) => {
    const { email, password } = login;
    const userOrNull = await User.findOne(
        { where: { email, password } },
    );
    if (!userOrNull) throw new Error('Invalid fields');
    return generateToken(email, password);
};

module.exports = { createUser, signIn };