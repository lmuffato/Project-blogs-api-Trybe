const postService = require('../services/postService');

const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;
const HTTP_BAD_STATUS = 400;

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const userId = req.user.id;

  const response = await postService.insert({ title, content, categoryIds, userId });

  if (response.code) {
    return res.status(response.code).json({
        message: response.message,
    });
}

  return res.status(HTTP_CREATED_STATUS).json(response);
};

const getAll = async (_req, res) => {
  try {
    const response = await postService.findAll();

    return res.status(HTTP_OK_STATUS).json(response);
  } catch (error) {
    return res.status(HTTP_BAD_STATUS).json({ error });
  }
};

// const getById = async (req, res) => {
//   const { id } = req.params;

//   const response = await userService.findByID(id);

//   if (response.code) {
//     return res.status(response.code).json({
//         message: response.message,
//     });
// }

//   return res.status(HTTP_OK_STATUS).json(response);
// };

module.exports = {
  create,
  getAll,
  // getById,
}; 