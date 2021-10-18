const userService = require('../services/user');
const { User } = require('../models');
const MESSAGE = require('../util/Message');

const createUser = async (req, res) => {
   try {
    const { displayName, email, password, image } = req.body;

    if (!email) return res.status(400).json({ message: MESSAGE.emailNotExists.message });
    if (!password) return res.status(400).json({ message: MESSAGE.passwordNotExists.message });

    const user = await userService.createUser(displayName, email, password, image); 
    
    if (user.status === 201) {
        await User.create({ displayName, email, password, image });
        return res.status(201).json({ token: user.token });
    }

    return res.status(user.status).json({ message: user.message });
   } catch (err) {
       return res.status(500).json({ err });
   }
};

const loginUser = async (req, res) => {
    const { displayName, email, password } = req.body;

    const login = await userService.loginUser(displayName, email, password);

    if (login.status === 201) return res.status(201).json({ token: login.message });

    return res.status(login.status).json({ message: login.message });
};

module.exports = { createUser, loginUser };