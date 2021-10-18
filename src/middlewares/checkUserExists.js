const getUserByEmail = require('../services/getUserByEmail');
const { userNotExists } = require('../utils/errors');

const checkUserExists = async (req, res, next) => {
  const { email } = req.body;

  const userByEmail = await getUserByEmail(email);

  if (!userByEmail) {
    return res
      .status(userNotExists.code)
      .json({ message: userNotExists.message });
  }

  req.user = userByEmail.dataValues;

  next();
};

module.exports = checkUserExists;
