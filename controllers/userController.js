const { User } = require('../models');

const create = (req, res) => {
  const { displayName, email, password, image } = req.body;
  User.create({ displayName, email, password, image })
    .then(() => {
      res.status(201).json({ displayName, email, image });
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
};

const getAll = (_req, res, _next) => {
  User.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
};

const getById = (req, res) => {
  User.findByPk(req.params.id) 
    .then(async (user) => {
      if (user === null) {
        return res.status(404).send({ message: 'User does not exist' });
      }
      res.status(200).json(user);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
};

module.exports = {
  create,
  getAll,
  getById,
};
