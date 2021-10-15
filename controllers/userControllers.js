const { Users } = require('../models');
const token = require('../services/tokenJwt');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    await Users.create({ displayName, email, password, image });
    const payload = { displayName, email };
    const getToken = token.createToken(payload);
    res.status(201).json({ token: getToken });
};

const login = (req, res) => {
  const { email } = req.body;
  res.status(200).json({ token: token.createToken({ email }) });
};

const getUsers = async (req, res) => {
    const { authorization } = req.headers;
    const validateToken = token.validateToken(authorization);
    if (validateToken) {
        return res.status(validateToken.status).json({ message: validateToken.message });
    } 
        const users = await Users.findAll();
        res.status(200).json(users);
};

module.exports = {
    createUser,
    login,
    getUsers,
};