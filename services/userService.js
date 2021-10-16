const { User } = require('../models');

const createUser = async (user) => {
    const userOrNull = await User.findOne({ where: { email: user.email } });
    if (userOrNull !== null) throw new Error('User already registered');
    const userSaved = await User.create({ ...user });
    return !!userSaved;
};

const login = async (login) => {
    const userOrNull = await User.findOne(
        { where: { email: login.email, password: login.password } },
    );
};

module.exports = { createUser };