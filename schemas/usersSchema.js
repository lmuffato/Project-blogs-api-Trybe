const { User } = require('../models');

const EMAILREGISTRED = {
    message: 'User already registered',
    code: 409,
};

const DISPLAYNAMELENGTH = {
    message: '"displayName" length must be at least 8 characters long',
    code: 400,
};

const EMAILFORMAT = {
    message: '"email" must be a valid email',
    code: 400,
};

const EMAILEMPTY = {
    message: '"email" is required',
    code: 400,
};

const PASSWORDFORMAT = {
    message: '"password" length must be 6 characters long',
    code: 400,
};

const PASSWORDEMPTY = {
    message: '"password" is required',
    code: 400,
};

const validateDisplayName = (displayName) => {
    if (displayName.length < 8) return DISPLAYNAMELENGTH;
};

// https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail

const validateEmail = async (email) => {
    const checkEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

    if (!email) return EMAILEMPTY;

    if (!checkEmail.test(email)) return EMAILFORMAT;

    const existEmail = await User.findOne({
        where: { email },
    });
    
    if (existEmail) return EMAILREGISTRED;
    
};

const validatePassword = (password) => {
    if (!password) return PASSWORDEMPTY;
    if (password.length !== 6) return PASSWORDFORMAT;
};

module.exports = {
    validateDisplayName,
    validateEmail,
    validatePassword,
};