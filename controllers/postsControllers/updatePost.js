const rescue = require('express-rescue');
const { StatusCodes: { OK, NOT_FOUND, BAD_REQUEST, UNAUTHORIZED } } = require('http-status-codes');
const { BlogPost, Category } = require('../../models');
const { postServices } = require('../../services');

const getResult = (post) => {
  const { title, content, userId, categories } = post;

  const result = { 
    title, 
    content, 
    userId, 
    categories: categories
      .map((category) => {
        const { id, name } = category;
        return {
          id,
          name,
        };
    }),
  };

  return result;
};

module.exports = [
  (req, res, next) => {
    const { categoryIds } = req.body;
    if (categoryIds) {
      console.log(categoryIds);
      next({
        statusCode: BAD_REQUEST,
        message: 'Categories cannot be edited',
      });
    }

    next();
  },

  (req, res, next) => {
    const { title, content } = req.body;

    const { error } = postServices.validatePostToUpdate(title, content);

    if (error) {
      next(error);
    }

    next();
  },

  rescue(async (req, res, next) => {
    const { id: userPostingId } = req.user;
    const { id } = req.params;
  
    const post = await BlogPost.findOne({ where: { id } });

    if (!post) {
      next({
        statusCode: NOT_FOUND,
        message: 'Post does not exist',
      });
    }

    const { userId } = post;

    if (userPostingId !== userId) {
      next({
        statusCode: UNAUTHORIZED,
        message: 'Unauthorized user',
      });
    }
    next();
  }),

  rescue(async (req, res) => {
    const { title, content } = req.body; const { id } = req.params;
  
    await BlogPost.update({ title, content }, { where: { id } });

    const post = await BlogPost.findOne({ where: { id }, 
      include: [
        { model: Category, as: 'categories', attributes: { exclude: ['PostsCategory'] } },
      ],
    });
    const result = getResult(post);

    res.status(OK).json(result);
  }), 
];
