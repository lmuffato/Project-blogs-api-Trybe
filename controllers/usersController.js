const rescue = require('express-rescue');
const usersService = require('../services/usersService');

const create = rescue(async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const user = await usersService.createUser(displayName, email, password, image);
    
    if (user.message) return res.status(user.code).json({ message: user.message });
    
    return res.status(201).json({ token: user.token });
});

module.exports = {
    create,
};