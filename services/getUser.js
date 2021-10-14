const { User } = require('../models/index');

const getUser = async (obj) => {
    const user = await User.findOne({ where: obj });
    return user;
};

module.exports = getUser;