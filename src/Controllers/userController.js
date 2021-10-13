const usersServices = require('../Services/userServices');

const addUsers = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const { code, message, token } = await usersServices
      .addUsers(displayName, email, password, image);

    return res.status(code).json({ message, token });
};

module.exports = {
  addUsers,
};