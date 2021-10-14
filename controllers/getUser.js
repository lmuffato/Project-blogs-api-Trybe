const { User } = require('../models');

const getUser = async (_req, res) => {
    console.log('entrou no constroler');
    const users = await User.findAll();    
    return res.status(200).json(users);
};

module.exports = getUser;