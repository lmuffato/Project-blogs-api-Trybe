const { User } = require('../models');
const { takeToken } = require('../services');

const deleteUser = async (req, res) => {
    const { authorization } = req.headers;
    const { payload } = takeToken(authorization);
    await User.destroy({ where: { id: payload } });
    return res.status(204).end();
};

module.exports = deleteUser;