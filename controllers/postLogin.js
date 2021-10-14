const { User } = require('../models');
const { getToken } = require('../services');

const ERROR = { message: 'Invalid fields' };

const postLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email, password } });
    if (!user) return res.status(400).json(ERROR);
    const token = getToken(user.id);
    return res.status(200).json({ token });
};

module.exports = postLogin;