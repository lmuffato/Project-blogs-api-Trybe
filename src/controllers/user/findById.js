const UserServices = require('../../services/user');

const findById = async (req, res) => {
  const { id } = req.params;
  const user = await UserServices.findById(id);

  if (!user) {
    return res.status(404).json({
      message: 'User does not exist',
    });
  }

  return res.status(200).json(user);
};

module.exports = findById;