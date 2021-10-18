const getUserByEmail = require('../services/getUserByEmail');
const { userAlreadyExists } = require('../utils/errors');

module.exports = async (req, res, next) => {
  const { email } = req.body;
  const existUser = await getUserByEmail(email);

  if (existUser) {
    return res
      .status(userAlreadyExists.code)
      .json({ message: userAlreadyExists.message });
  }

  next();
};
