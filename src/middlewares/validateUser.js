const { invalidPassword } = require('../utils/errors');

const validateUser = async (req, res, next) => {
  const { password } = req.body;

  const { user } = req;

  if (user.password !== password) {
    return res
      .status(invalidPassword.code)
      .json({ message: invalidPassword.message });
  }

  next();
};

module.exports = validateUser;
