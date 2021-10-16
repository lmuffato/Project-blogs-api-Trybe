const { createToken } = require('../auth/authJWT');
const { User } = require('../models');

async function findUserByEmail(email) {
  const user = await User.findOne({ where: { email } });
  return user;
}

async function createUser(req, res) {
  const { displayName, password, email, image } = req.body;
  const userLogin = { password, email };

  const isUserResgistered = await findUserByEmail(email);

  if (isUserResgistered) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const token = await createToken(userLogin);

  await User.create({ displayName, password, email, image });
  return res.status(201).json({ token });
}

async function login(req, res) {
  const { password, email } = req.body;
  const userLogin = { password, email };
  const isUserResgistered = await findUserByEmail(email);

  if (!isUserResgistered) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const token = await createToken(userLogin);

  return res.status(200).json({ token });
}

async function findAllUsers(_req, res) {
  try {
    const users = await User.findAll({
      attributes: ['id', 'displayName', 'email', 'image'],
    });
    return res.status(200).json(users);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
}

async function findUserById(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findOne({ where: { id } });
    if (!user) return res.status(404).json({ message: 'User does not exist' });
    return res.status(200).json(user);
  } catch (err) {
    return res.status(404).json({ message: 'User does not exist' });
  }
}

module.exports = {
  createUser,
  login,
  findAllUsers,
  findUserById,
};
