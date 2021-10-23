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

const findUser = async (email) => User.findOne({ where: { email } });

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = { email, password };

  const token = createToken(user);

  const findUserEmail = await findUser(email);

  if (findUserEmail === null) {
    return res.status(400).json({ message: 'Invalid fields' }); 
  }

  res.status(200).json(token);
};

const getUsers = async (_req, res) => {
  User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      console.log(error.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
};

const getUser = async (req, res) => {
  User.findByPk(req.params.id)
    .then((user) => {
      const { id, displayName, email, image } = user;
      res.status(200).json({ id, displayName, email, image });
    })
    .catch(() => {
      res.status(404).json({ message: 'User does not exist' });
    });
  };
  
module.exports = {
  create,
  login,
  getUsers,
  getUser,
  findUser,
};