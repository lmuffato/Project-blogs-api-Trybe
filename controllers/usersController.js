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

module.exports = {
  create,
};