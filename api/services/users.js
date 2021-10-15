const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { clientErrors } = require('../utils/httpStatusCodes');
const newError = require('../utils/createErrorMessage');

const secret = process.env.JWT_SECRET;
const jwtConfig = { expiresIn: '12h', algorithm: 'HS256' };

const existUser = async (email) => User.findOne({ where: { email } });

const createUser = async (displayName, email, password, image) => {
    const existUserEmail = await existUser(email);
    if (existUserEmail) return newError('User already registered', clientErrors.conflict);
    const createdUser = await User.create({ displayName, email, password, image });
    return createdUser;
};

const getUsers = async () => { 
    const users = await User.findAll();
    return users.map(({ id, displayName, email, image }) => 
    ({ id, displayName, email, image }));
};

const getUserById = async (id) => {
    const user = await User.findByPk(id);
    return user || newError('User does not exist', clientErrors.notFound);
};

const existLoginData = async (email, password) => 
 User.findOne({ where: { email, password } });

const login = async (email, password) => {
    const user = await existLoginData(email, password);
    if (user) {
        const { id, displayName, image } = user;
        const userData = { id, displayName, email, image };
        const token = jwt.sign(userData, secret, jwtConfig);
        return { token };
    }
    return newError('Invalid fields', clientErrors.badRequest);
};

module.exports = { createUser, login, getUsers, getUserById };