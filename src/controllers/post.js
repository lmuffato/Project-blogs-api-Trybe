const { BlogPost, Category, User } = require('../database/models');
const validation = require('../validations');
const { getStatusCode } = require('../utils/statusCode');

async function createPost(req, res, next) {
  try {
    const token = req.headers.authorization;
    const newPost = req.body;
    const dateNow = new Date();
    const date = { published: dateNow, updated: dateNow };
    const { status } = getStatusCode('created');

    validation.isRequired(newPost.title, 'title');
    validation.isRequired(newPost.content, 'content');
    validation.isRequired(newPost.categoryIds, 'categoryIds');
    await validation.isCategoriesValid(newPost.categoryIds, Category);

    const { email } = validation.verifyToken(token);
    const { id: userId } = await User.findOne({ where: { email } });
    const { id, title, content } = await BlogPost.create({ userId, ...date, ...newPost });

    res.status(status).json({ id, userId, title, content });
  } catch (error) {
    next(error);
  }
}

async function getPosts(req, res, next) {
  try {
    const token = req.headers.authorization;
    const { status } = getStatusCode('ok');

    validation.verifyToken(token);

    const categories = await BlogPost.findAll({
      include: [
        { model: User, as: 'user' },
        { model: Category, as: 'categories' },
      ],
    });

    res.status(status).json(categories);
  } catch (error) {
    next(error);
  }
}

async function getPostById(req, res, next) {
  try {
    const token = req.headers.authorization;
    const { id } = req.params;
    const { status } = getStatusCode('ok');

    validation.verifyToken(token);

    const post = await BlogPost.findOne({
      where: { id },
      include: [
          { model: User, as: 'user' },
          { model: Category, as: 'categories' },
        ],
    });
    validation.isConditionValid(post, 'notFound', 'Post does not exist');

    res.status(status).json(post);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createPost,
  getPosts,
  getPostById,
};
