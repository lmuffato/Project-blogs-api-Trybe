const rescue = require('express-rescue');
const usersService = require('../services/usersService');

const create = rescue(async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const user = await usersService.createUser(displayName, email, password, image);
    
    if (user.message) return res.status(user.code).json({ message: user.message });
    
    return res.status(201).json({ token: user.token });
});

const getAllUser = rescue(async (_req, res) => {
    const users = await usersService.getAllUser();

    res.status(200).json(users);
});

const getUserById = rescue(async (req, res) => {
    const { id } = req.params;

    const users = await usersService.getUserById(id);
console.log(users);
    if (!users) return res.status(404).json({ message: 'User does not exist' });

    res.status(200).json(users);
});

module.exports = {
    create,
    getAllUser,
    getUserById,
};