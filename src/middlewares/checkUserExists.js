const getUserByEmail = require('../services/getUserByEmail');
const { notFoundUser } = require('../utils/errors');

const checkUserExists = async (req, res, next) => {
  const { email } = req.body;

  const userByEmail = await getUserByEmail(email);

  if (!userByEmail) {
    return res
      .status(notFoundUser.code)
      .json({ message: notFoundUser.message });
  }

  req.user = userByEmail.dataValues;

  next();
};

module.exports = checkUserExists;
