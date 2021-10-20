const { User } = require('../models'); 
const { createToken } = require('../auth/tokenCreation');

const create = (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = { displayName, email, password, image };

  const token = createToken(user);

  User.create({ displayName, email, password, image })
    .then(() => {
      res.status(201).json(token);
    })
    .catch(() => {
      res.status(409).json({ message: 'User already registered' });
    });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = { email, password };

  const token = createToken(user);

  const findUser = await User.findOne({ where: { email } });

  if (findUser === null) {
    return res.status(400).json({ message: 'Invalid fields' }); 
  }

  res.status(200).json(token);
};

module.exports = {
  create,
  login,
}; 