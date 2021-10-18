const { User } = require('../models');
const { userAlreadyExists } = require('../utils/errors');

const checkExistUser = async (req, res, next) => {
  const { email } = req.body;
  console.log(req.body);

  const userByEmail = await User.findOne({ where: { email } });

  if (userByEmail) {
    return res
      .status(userAlreadyExists.code)
      .json({ message: userAlreadyExists.message });
  }

  next();
};

module.exports = checkExistUser;
