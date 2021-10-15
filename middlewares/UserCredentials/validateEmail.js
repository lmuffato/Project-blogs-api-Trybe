const { User } = require('../../models');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

module.exports = (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      message: 'email is required'
    })
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: 'email must be a valid email'
    });
  }

  const foundUser = User.findOne({ where: { email } });

  if (foundUser) {
    return res.status(409).json({
      message: 'User already registered'
    })
  }

  next();
}