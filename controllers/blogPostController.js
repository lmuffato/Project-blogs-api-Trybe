const blogPostService = require('../services/blogPostService');

const status = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  SERVER_ERROR: 500,
};

const addBlogPost = async (req, res) => {
  const { headers: { authorization: token },
    body: { title, content, categoryIds } } = req;
  
    const blogPost = await blogPostService.addBlogPost(token, title, content, categoryIds);
  
  if (blogPost.err) {
    return res.status(status[blogPost.code]).json(blogPost.err);
  }

  return res.status(status.CREATED).json(blogPost);
};

module.exports = {
  addBlogPost,
};
