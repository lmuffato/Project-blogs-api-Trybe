const userService = require('../services/userService');

const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;
const HTTP_BAD_STATUS = 400;

const getAll = async (_req, res) => {
  try {
    const response = await userService.findAll();

    return res.status(HTTP_OK_STATUS).json(response);
  } catch (error) {
    return res.status(HTTP_BAD_STATUS).json({ error });
  }
};

// const getById = (req, res) => {
//   User.findByPk(req.params.id)
//     .then(async (user) => {
//       if (user === null) {
//         res.status(404).send({ message: 'Usuário não encontrado' });
//       }

//       const products = await user.getProducts();

//       res.status(200).json({ ...user.dataValues, products });
//     })
//     .catch((e) => {
//       console.log(e.message);
//       res.status(500).json({ message: 'Algo deu errado' });
//     });
// };

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const response = await userService.insertUser({ displayName, email, password, image });

  if (response.code) {
    return res.status(response.code).json({
        message: response.message,
    });
}

  return res.status(HTTP_CREATED_STATUS).json(response);
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const response = await userService.login({ email, password });

  if (response.code) {
    return res.status(response.code).json({
        message: response.message,
    });
}

  return res.status(HTTP_OK_STATUS).json(response);
};

// const update = async (req, res) => {
//   const { name, username, email, password } = req.body;

//   User.update(
//     { name, username, email, password },
//     {
//       where: {
//         id: req.params.id,
//       },
//     }
//   )
//     .then((users) => {
//       res.status(200).send({ message: 'Usuário atualizado com sucesso.' });
//     })
//     .catch((e) => {
//       console.log(e.message);
//       res.status(500).send({ message: 'Algo deu errado' });
//     });
// };

// const remove = async (req, res) => {
//   User.destroy({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((users) => {
//       res.status(200).send({ message: 'Usuário excluído com sucesso.' });
//     })
//     .catch((e) => {
//       console.log(e.message);
//       res.status(500).send({ message: 'Algo deu errado' });
//     });
// };

module.exports = {
  // getAll,
  // getById,
  create,
  login,
  getAll,
  // update,
  // remove,
}; 