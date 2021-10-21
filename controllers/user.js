const userService = require('../services/user');
const { User } = require('../models');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    
    const user = await userService.createUser(displayName, email, password, image);

    if (user.status === 409 || user.status === 400) {
        return res.status(user.status).json({ message: user.message });
    }

    if (user.status === 201) return res.status(user.status).json({ token: user.token });
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const login = await userService.loginUser(email, password);
    if (login.status === 200) return res.status(200).json({ token: login.message });
    return res.status(login.status).json({ message: login.message });
};

const getUser = async (req, res) => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return res.status(200).json(users);
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!user) return res.status(404).json({ message: 'User does not exist' });
    return res.status(200).json(user);
};

module.exports = { createUser, loginUser, getUser, getUserById };