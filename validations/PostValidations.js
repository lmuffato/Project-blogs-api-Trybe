const { Categorie } = require('../models');

const requiredField = (param) => {
  if (param === undefined) return true;
};

const listCategoryId = async (categoryId) => {
  const category = await Categorie.findOne({ where: { id: categoryId }, in: { categoryId } });
  if (!category) return true;
};

const status = {
  code400: 400,
};

const message = {
  messageTitleRequired: '"title" is required',
  messageContentRequired: '"content" is required',
  messageCategoryIdRequired: '"categoryIds" is required',
  messageCategotyNotFound: '"categoryIds" not found',
};

const validationPost = async (title, categoryIds, content) => {
  const { code400 } = status;
  const { 
    messageTitleRequired, 
    messageContentRequired, 
    messageCategoryIdRequired, 
    messageCategotyNotFound,
  } = message;

  switch (true) {
    case requiredField(title): return { code: code400, message: messageTitleRequired };
    case requiredField(categoryIds): return { code: code400, message: messageCategoryIdRequired };
    case requiredField(content): return { code: code400, message: messageContentRequired };
    case (await listCategoryId(categoryIds)): 
    return { code: code400, message: messageCategotyNotFound };
    default: return {};
  }
};

module.exports = {
  validationPost,
};