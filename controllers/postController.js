const { postServices } = require('../services');

const createPost = async (req, res) => {
  try {
    const newPost = await postServices.createPost(req);
    
    return res.status(201).json(newPost);
  } catch (err) {
    console.error(err);
  }
};

const getAllPosts = async (_req, res) => {
  try {
    const posts = await postServices.getAllPosts();
    
    return res.status(200).json(posts);
  } catch (err) {
    console.error(err);
  }
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await postServices.getPostById(id);

    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    
    return res.status(200).json(post);
  } catch (err) {
    console.error(err);
  }
};

const updatePost = async (req, res) => {
  const { params: { id }, body: { title, content, categoryIds }, headers: { authorization } } = req;

  try {
    if (categoryIds) {
      return res.status(400).json({ message: 'Categories cannot be edited' });
    }

    const updatedPost = await postServices.updatePost(id, title, content, authorization);

    if (updatedPost.status) {
      return res.status(updatedPost.status).json({ message: updatedPost.message });
    }

    return res.status(200).json(updatedPost);
  } catch (err) {
    console.error(err);
  }
};

const deletePost = async (req, res) => {
  const { params: { id }, headers: { authorization } } = req;

  try {
    const deletedPost = await postServices.deletePost(id, authorization);

    if (deletedPost.status) {
      return res.status(deletedPost.status).json({ message: deletedPost.message });
    }

    return res.status(204).json(deletePost);
  } catch (err) {
    console.error(err);
  }
};

const findByQuery = async (req, res) => {
  const { q } = req.query;
  const query = await postServices.findByQuery(q);

  if (!query) return res.status(404).json({ message: 'Post not found' });

  return res.status(200).json(query);
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  findByQuery,
};