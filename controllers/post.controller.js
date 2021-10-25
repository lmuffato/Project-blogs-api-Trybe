const { listAllPosts, savePost } = require('../services/post.service');

async function listPosts(request, response) {
  try {
    const posts = await listAllPosts();
    return response.status(200).json(posts);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
}

async function createPost(request, response) {
  try {
    const { title, content } = request.body;
    const { user: { id } } = request;
    const post = await savePost({ title, content, userId: id });
    return response.status(201).json(post);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
}

module.exports = { listPosts, createPost };