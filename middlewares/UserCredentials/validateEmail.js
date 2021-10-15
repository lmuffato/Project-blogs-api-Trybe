const { User } = require('../../models');

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

module.exports = async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  const foundUser = await User.findOne({ where: { email } });
  console.log(foundUser);

  if (foundUser) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }

  next();
};