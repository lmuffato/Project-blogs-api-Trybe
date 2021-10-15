const usersService = require('../services/users');
const { success } = require('../utils/httpStatusCodes');

const createUser = async (req, res, next) => {
    const { displayName, email, password, image } = req.body;
    const user = await usersService.createUser(displayName, email, password, image);
    if (user.message) return next(user);
    return res.status(success.created).json(user);
};

const login = async (req, res, next) => {
    const { email, password } = req.body;
    const token = await usersService.login(email, password);
    if (token.message) return next(token);
    return res.status(success.ok).json(token);
};

module.exports = { createUser, login };
