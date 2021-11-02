const { Category } = require('../../models');
const messages = require('./messages');
const { makeRes } = require('../../utils');

const titleValidate = (title) => {
  if (!title) {
    return {
      status: messages.required.status,
      message: messages.required.title,
    };
  }
};

const contentValidate = (content) => {
  if (!content) {
    return {
      status: messages.required.status,
      message: messages.required.content,
    };
  }
};

const categoryIdsValidate = async (categoryIds) => {
  if (!categoryIds) {
    return {
      status: messages.required.status,
      message: messages.required.categoryId,
    };
  }
  const category = await Category.findAll({ where: { id: categoryIds } });
  if (categoryIds.length !== category.length) {
    return {
      status: messages.required.status,
      message: messages.required.categoryIds,
    };
  }
};

const postValidate = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const categoryIdsValid = await categoryIdsValidate(categoryIds);
  const titleValid = titleValidate(title);
  const contentValid = contentValidate(content);
  if (categoryIdsValid) return makeRes(res, categoryIdsValid);
  if (titleValid) return makeRes(res, titleValid);
  if (contentValid) return makeRes(res, contentValid);
  next();
};

module.exports = { postValidate };
