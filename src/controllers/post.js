const { BlogPost, Category, User } = require('../database/models');
const validation = require('../validations');
const { getStatusCode } = require('../utils/statusCode');

async function createPost(req, res, next) {
  try {
    const token = req.headers.authorization;
    const newPost = req.body;
    const dateNow = new Date();
    const date = { published: dateNow, updated: dateNow };

    validation.isRequired(newPost.title, 'title');
    validation.isRequired(newPost.content, 'content');
    validation.isRequired(newPost.categoryIds, 'categoryIds');
    await validation.isCategoriesValid(newPost.categoryIds, Category);

    const { email } = validation.verifyToken(token);
    const { id: userId } = await User.findOne({ where: { email } });
    const { id, title, content } = await BlogPost.create({ userId, ...date, ...newPost });

    res.status(getStatusCode('created')).json({ id, userId, title, content });
  } catch (error) {
    next(error);
  }
}

async function getPosts(req, res, next) {
  try {
    const token = req.headers.authorization;

    validation.verifyToken(token);

    const categories = await BlogPost.findAll({
      include: [
        { model: User, as: 'user' },
        { model: Category, as: 'categories' },
      ],
    });

    res.status(getStatusCode('ok')).json(categories);
  } catch (error) {
    next(error);
  }
}

async function getPostById(req, res, next) {
  try {
    const token = req.headers.authorization;
    const { id } = req.params;

    validation.verifyToken(token);

    const post = await BlogPost.findOne({
      where: { id },
      include: [
          { model: User, as: 'user' },
          { model: Category, as: 'categories' },
        ],
    });
    validation.isConditionValid(post, 'notFound', 'Post does not exist');

    res.status(getStatusCode('ok')).json(post);
  } catch (error) {
    next(error);
  }
}

async function updatePost(req, res, next) {
  try {
    const token = req.headers.authorization;
    const { title, content, ...newPost } = req.body;
    const updated = new Date();
    const { id } = req.params;

    const { email } = validation.verifyToken(token);
    validation.isRequired(title, 'title');
    validation.isRequired(content, 'content');
    validation.isConditionValid(!newPost.categoryIds, 'badRequest', 'Categories cannot be edited');

    const { id: theUserId } = await User.findOne({ where: { email } });
    const { userId, categories } = await BlogPost.findOne({ where: { userId: id }, 
      include: [{ model: Category, as: 'categories' }] });
    validation.isConditionValid(theUserId === userId, 'unauthorized', 'Unauthorized user');

    await BlogPost.update({ title, content, updated }, { where: { id } });

    res.status(getStatusCode('ok')).json({ title, content, userId, categories });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
};
