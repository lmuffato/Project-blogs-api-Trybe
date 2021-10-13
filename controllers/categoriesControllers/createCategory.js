const rescue = require('express-rescue');
const { StatusCodes: { 
  CREATED, 
  BAD_REQUEST, 
  INTERNAL_SERVER_ERROR },
} = require('http-status-codes');
const { Category } = require('../../models');

module.exports = rescue(async (req, res) => {
    const { name } = req.body;

    if (!name) {
      res.status(BAD_REQUEST).json({ message: '"name" is required' });
    }

    await Category.create({ name })
      .then((newCategory) => {
        res.status(CREATED).json(newCategory);
      })
      .catch((e) => {
        console.log(e.message);
        res.status(INTERNAL_SERVER_ERROR).send({ message: 'Algo deu errado' });
      });
  });
