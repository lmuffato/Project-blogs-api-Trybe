const { Category } = require('../../models');

const errorValidateTitle = {
  status: 400,
    error: {
      message: '"title" is required',
    },
};

const errorValidateContent = {
  status: 400,
    error: {
      message: '"content" is required',
    },
};

const errorValidateCategoryIds = {
  status: 400,
    error: {
      message: '"categoryIds" is required',
    },
};

const errorValidateCategoryIdsExist = {
  status: 400,
    error: {
      message: '"categoryIds" not found',
    },
};

const validatePost = (post) => {
  if (!post.title) throw errorValidateTitle;
  if (!post.content) throw errorValidateContent;
  if (!post.categoryIds) throw errorValidateCategoryIds;
};

const validateCategoryIdsExist = async (post) => {
  const response = await Category.findAll();
  const listIds = response.map((category) => {
    const { dataValues } = category;
    return dataValues.id;
  });

  const categoryIds = post.categoryIds.every((id) => listIds.includes(id));
  if (!categoryIds) throw errorValidateCategoryIdsExist;
};

module.exports = {
  validatePost,
  validateCategoryIdsExist,
};
