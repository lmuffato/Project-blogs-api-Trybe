const getUserByEmail = require('../services/getUserByEmail');
const { userEmailNotExists } = require('../utils/errors');

const checkUserExists = async (req, res, next) => {
  const { email } = req.body;

  const userByEmail = await getUserByEmail(email);

  if (!userByEmail) {
    return res
      .status(userEmailNotExists.code)
      .json({ message: userEmailNotExists.message });
  }

  req.user = userByEmail.dataValues;

  next();
};

module.exports = checkUserExists;
