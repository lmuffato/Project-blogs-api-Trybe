const postService = require('../services/postService');

async function create(req, res) {
  const { title, categoryIds, content } = req.body;
  const { email } = req;

  const { code, message, created } = await postService.create(
    { title, categoryIds, content, email },
  );

  if (message) {
    return res.status(code).json({ message });
  }

  res.status(code).json(created);
}

module.exports = {
  create,
};