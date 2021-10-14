const { User } = require('../models');
const { newToken } = require('../auth/newJWT');

const createNewUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const JWT_PAYLOAD = { email, password };

  const token = newToken(JWT_PAYLOAD);

  try {
    await User.create({ displayName, email, password, image });
    res.status(201).json({ token });
  } catch (e) {
    res.status(409).json({ message: 'User already registered' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const JWT_PAYLOAD = { email, password };

  const token = newToken(JWT_PAYLOAD);
  const user = await User.findOne({
    where: { 
      email, 
      password,
    },
  });

  if (!user) return res.status(400).json({ message: 'Invalid fields' });

  res.status(200).json({ token });
};

module.exports = {
  createNewUser,
  login,
};
