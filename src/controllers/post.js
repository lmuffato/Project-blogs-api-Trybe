const { BlogPost, Category } = require('../database/models');
const validation = require('../validations');
const { getStatusCode } = require('../utils/statusCode');

async function createPost(req, res, next) {
  try {
    const token = req.headers.authorization;
    const newPost = req.body;
    const { status } = getStatusCode('created');

    validation.isRequired(newPost.title, 'name');
    validation.isRequired(newPost.content, 'content');
    validation.isRequired(newPost.categoryIds, 'categoryId');
    
    newPost.categoryIds.forEach((id) => {
      const category = Category.findOne({ where: { id } });
      validation.isCategoryValid(category);
    });

    validation.verifyToken(token);

    const post = await BlogPost.create({ ...newPost });

    res.status(status).json(post);
  } catch (error) {
    next(error);
  }
}

async function getPosts(req, res, next) {
  try {
    const token = req.headers.authorization;
    const { status } = getStatusCode('ok');

    validation.verifyToken(token);

    const categories = await BlogPost.findAll();

    res.status(status).json(categories);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createPost,
  getPosts,
};
