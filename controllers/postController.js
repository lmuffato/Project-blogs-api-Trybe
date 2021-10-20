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

async function getAll(req, res) {
  const posts = await postService.getAll();

  res.status(200).json(posts);
}

async function getbyId(req, res) {
  const { id } = req.params;
  
  const { code, message, post } = await postService.getById(id);

  if (message) return res.status(code).json({ message });

  res.status(code).json(post);
}

async function editPost(req, res) {
  const { title, content } = req.body;
  const { id } = req.params;
  const { email } = req;

  const { code, message, editedPost } = await postService.editPost(id, title, content, email);

  if (message) {
    return res.status(code).json({ message });
  }

  res.status(code).json(editedPost);
}

module.exports = {
  create,
  getAll,
  getbyId,
  editPost,
};