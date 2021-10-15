const rescue = require('express-rescue');
const { StatusCodes: { 
  CREATED, 
  BAD_REQUEST, 
  } } = require('http-status-codes');
const { postServices } = require('../../services');
const { BlogPost } = require('../../models');
const getPostCategories = require('../categoriesControllers/getPostCategories');

module.exports = [
  (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    
    const { error } = postServices.validatePost(title, content, categoryIds);
    
    if (error) {
      return next(error);
    }
    
    next();
  },

  rescue(async (req, res, next) => {
    const { categoryIds } = req.body;

    const getCategories = await getPostCategories(categoryIds);

    if (getCategories.length === 0) {
      next({
        code: BAD_REQUEST, 
        message: '"categoryIds" not found' });
    }

    next();
  }),
  
  rescue(async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { id: userId } = req.user;

    BlogPost.create(
      { 
        userId,
        title,
        content,
        categoryIds,
      },
    ).then((newPost) => {
      const { id } = newPost;
      res.status(CREATED).json({ id, userId, title, content, categoryIds });
    });
  }),
];
