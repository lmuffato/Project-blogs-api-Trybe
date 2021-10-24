const { Category } = require('../models');

const create = (req, res) => {
  const { name } = req.body;
  Category.create({ name })
    .then(() => {
      res.status(201).json({ name });
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
};

const getAll = (_req, res, _next) => {
  Category.findAll()
    .then((categories) => {
      res.status(200).json(categories);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
};

module.exports = {
  create,
  getAll,
};
