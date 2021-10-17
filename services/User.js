const { User } = require('../models');
const { getToken } = require('../middleware/getToken');

const createUser = async ({ displayName, email, password, image }) => {
    const existingUser = await User.findOne({ where: { email } });
    
    if (existingUser) {
        return 'exists';
    }
    User.create({ displayName, email, password, image });
    return getToken(email, password);
    };

    module.exports = { createUser };