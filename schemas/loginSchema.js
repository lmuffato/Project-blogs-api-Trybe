const { User } = require('../models');

const EMAILFIELD = {
    message: '"email" is required',
    code: 400,
};

const PASSWORDFIELD = {
    message: '"password" is required',
    code: 400,
};

const EMAILEMPTY = {
    message: '"email" is not allowed to be empty',
    code: 400,
};

const PASSWORDEMPTY = {
    message: '"password" is not allowed to be empty',
    code: 400,
};

const USERINVALID = {
    message: 'Invalid fields',
    code: 400,
};

const validateEmail = async (email) => {
    if (email === '') return EMAILEMPTY;

    if (!email) return EMAILFIELD;

    const existEmail = await User.findOne({ where: { email } });

    if (!existEmail) return USERINVALID;
};

const validatePassword = (password) => {
    if (password === '') return PASSWORDEMPTY;

    if (!password) return PASSWORDFIELD;
};

module.exports = {
    validateEmail,
    validatePassword,
};