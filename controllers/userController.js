const userService = require('../services/userService');

const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;
const HTTP_BAD_STATUS = 400;
const HTTP_NO_CONTENT_STATUS = 204;

const getAll = async (_req, res) => {
  try {
    const response = await userService.findAll();

    return res.status(HTTP_OK_STATUS).json(response);
  } catch (error) {
    return res.status(HTTP_BAD_STATUS).json({ error });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  const response = await userService.findByID(id);

  if (response.code) {
    return res.status(response.code).json({
        message: response.message,
    });
}

  return res.status(HTTP_OK_STATUS).json(response);
};

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

const deleteUser = async (req, res) => {
  const { id } = req.user;

  const response = await userService.deleteById(id);

  if (response.code) {
    return res.status(response.code).json({
        message: response.message,
    });
}

  return res.status(HTTP_NO_CONTENT_STATUS).end();
};

module.exports = {
  create,
  login,
  getAll,
  getById,
  deleteUser,
}; 