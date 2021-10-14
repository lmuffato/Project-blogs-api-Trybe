const usersService = require('../services/users');
const { success } = require('../utils/httpStatusCodes');

const createUser = async (req, res, next) => {
    const user = await usersService.createUser(req.body);
    if (user.message) return next(user);
    return res.status(success.created).json(user);
};

module.exports = { createUser };