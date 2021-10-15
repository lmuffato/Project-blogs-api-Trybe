const userService =require('../services/user');

function createUser(req, res, _next) {
    // const { displayName, email, password, image } = data;
    const { status, message, error } = userService.createUser(req.body);
    if (error) {
        return res.status(status).json({ message: error });
    }
    return res.json(status).json({ message });
}

module.exports = { createUser };
