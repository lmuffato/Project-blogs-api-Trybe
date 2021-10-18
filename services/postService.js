const Sequelize = require('sequelize');
const { Category, BlogPost, User } = require('../models');
const errorMap = require('../utils/errorMap');

const { Op } = Sequelize;

const verifyIfCategoriesExists = async (categoryIds) => {
  const result = await Category.findAll({
    where: {
      id: {
        [Op.in]: categoryIds,
      },
    },
  });

  return categoryIds.length === result.length;
};

const create = async (post, token) => {
  try {
    const { categoryIds, title, content } = post;
    const { id } = token;
    
    const categoriesExists = await verifyIfCategoriesExists(categoryIds);
    
    if (!categoriesExists) return errorMap.categoryidsNotFound;

    const blogPost = {
      title,
      content,
      userId: id,
      published: new Date(),
      updated: new Date(),
    };

    const { dataValues: { published, updated, ...others } } = await BlogPost.create(blogPost);

    return { ...others };
  } catch (error) {
    return errorMap.internalError;
  }
};

const getAll = async () => {
  try {
    const result = await BlogPost.findAll({
      include: [
        { model: User, as: 'user' },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
  
    return result;
  } catch (error) {
    console.error(error);
    return errorMap.internalError;
  }
};

module.exports = { create, getAll };
