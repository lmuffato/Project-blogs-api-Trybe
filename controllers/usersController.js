const { createToken } = require('../auth/authJWT');
const { User } = require('../models');

async function findUserByEmail(email) {
  const user = await User.findOne({ where: { email } });
  return user;
}

async function createUser(req, res) {
  const { displayName, password, email, image } = req.body;
  const userLogin = { password, email };

  const token = createToken(userLogin);
  const isUserResgistered = await findUserByEmail(email);

  if (isUserResgistered) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const createdUser = await User.create({ displayName, password, email, image })
    .then(() => {
      res.status(201).json({ token });
      return createdUser;
    });
}

module.exports = {
  createUser,
};