const usersService = require('../services/users');
const { success } = require('../utils/httpStatusCodes');

const createUser = async (req, res, next) => {
    const { displayName, email, password, image } = req.body;
    const user = await usersService.createUser(displayName, email, password, image);
    if (user.message) return next(user);
    return res.status(success.created).json(user);
};

const getUsers = async (req, res, _next) => {
    const users = await usersService.getUsers();
    return res.status(success.ok).json(users);
};

const getUserById = async (req, res, next) => {
    const { id } = req.params;
    const user = await usersService.getUserById(id);
    if (user.message) return next(user); 
    return res.status(success.ok).json(user);
};

const login = async (req, res, next) => {
    const { email, password } = req.body;
    const token = await usersService.login(email, password);
    if (token.message) return next(token);
    return res.status(success.ok).json(token);
};

module.exports = { createUser, login, getUsers, getUserById };
