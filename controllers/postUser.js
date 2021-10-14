const { getToken } = require('../services');
const { User } = require('../models');

const ERROR = {
    message: 'User already registered',
};

const postUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const userExists = await User.findOne({ where: { email } });
    if (userExists) return res.status(409).json(ERROR);
    const { id } = await User.create({ displayName, email, password, image });
    const token = getToken(id);
    return res.status(201).json({ token });
};

module.exports = postUser;