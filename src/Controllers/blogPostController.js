const blogPostServices = require('../Services/blogPostServices');
const blogPostModel = require('../Models/blogPostModel');

const addBlogPost = async (req, res) => {
  const { title: newTitle, content: newContent, categoryIds } = req.body;

  const { code, message, blogPost } = await blogPostServices.addBlogPost(
    req.user, newTitle, newContent, categoryIds,
  );
  if (blogPost) {
    const { id, userId, title, content } = blogPost;
    return res.status(code).json({ id, userId, title, content });
  }
  return res.status(code).json({ message });
};

const getAllPosts = async (req, res) => {
  const { code, allPosts } = await blogPostModel.getAllPosts();
  console.log([...allPosts]);
  return res.status(code).json([...allPosts]);
};

module.exports = {
  addBlogPost,
  getAllPosts,
};

// Foram realizadas consultas na PR da colega Ana Ventura para assimilar 
// a construção da funcao addBlogPost
// https://github.com/tryber/sd-010-a-project-blogs-api/blob/anaventura1811-blogs-api-project/controllers/blogPost.js