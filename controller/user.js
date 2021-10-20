const userService = require('../services/user');

async function createUser(req, res, next) {
    try {
        const { status, message, error } = await userService.createUser(req.body);
        if (error) {
            return res.status(status).json({ message: error });
        }
        return res.status(status).json({ message });
    } catch (error) { next({ status: 500, error }); }
}

async function getAll(_req, res) {
    const { status, data, message } = await userService.getAll();
    if (message) return res.status(status).json(message);

    return res.status(status).json(data);
}

module.exports = { createUser, getAll };
