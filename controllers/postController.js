const { postService } = require('../services');
const { CREATED } = require('../utils/statusCodeMap');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { token } = req;

  const result = await postService.create({ title, content, categoryIds }, token);

  const { error } = result;

  if (error) return res.status(error.code).json({ message: error.message });

  return res.status(CREATED).json(result);
};

module.exports = { create };