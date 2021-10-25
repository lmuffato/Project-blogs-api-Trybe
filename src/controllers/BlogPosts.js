const BlogPosts = require('../services/BlogPosts');
const {
  notFoundPost,
  unauthorized,
  internalError,
} = require('../utils/errors');

const createPost = async (req, res) => {
  try {
    const { title, categoryIds, content } = req.body;
    const { id: userId } = req.user;

    const currentDate = new Date();

    const { published, updated, ...rest } = await BlogPosts.createPost({
      title,
      categoryIds,
      content,
      userId,
      published: currentDate,
      updated: currentDate,
    });
    return res.status(201).json(rest);
  } catch (err) {
    return res
      .status(internalError.code)
      .json({ message: internalError.message });
  }
};

const getAllPosts = async (_req, res) => {
  try {
    const posts = await BlogPosts.getAllPosts();
    return res.status(200).json(posts);
  } catch (err) {
    console.log(err.message);
    return res
      .status(internalError.code)
      .json({ message: internalError.message });
  }
};

const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await BlogPosts.getPostById(id);

    if (!post) {
      return res
        .status(notFoundPost.code)
        .json({ message: notFoundPost.message });
    }

    return res.status(200).json(post);
  } catch (err) {
    console.log(err.message);
    return res
      .status(internalError.code)
      .json({ message: internalError.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updatedPost = await BlogPosts.updatePost({ title, content }, id);

    return res.status(200).json(updatedPost);
  } catch (err) {
    console.log(err.message);
    return res
      .status(internalError.code)
      .json({ message: internalError.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { post, user } = req;

    if (post.userId !== user.id) {
      return res
        .status(unauthorized.code)
        .json({ message: unauthorized.message });
    }

    console.log(post);

    await BlogPosts.deletePost(post.id);

    return res.status(204).send();
  } catch (err) {
    console.log(err.message);
    return res
      .status(internalError.code)
      .json({ message: internalError.message });
  }
};

module.exports = { createPost, getAllPosts, getPost, updatePost, deletePost };
