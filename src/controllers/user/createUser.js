const UserServices = require('../../services/user');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const newUser = await UserServices.createUser({ displayName, email, password, image });

  if (!newUser) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }

  return res.status(201).json({
    token: newUser,
  });
};

module.exports = createUser;
