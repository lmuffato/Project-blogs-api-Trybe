const { Users } = require('../models');
const token = require('../services/tokenJwt');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    await Users.create({ displayName, email, password, image });
    const payload = { displayName, email };
    const getToken = token(payload);
    res.status(201).json({ token: getToken });
};

module.exports = {
    createUser,
};