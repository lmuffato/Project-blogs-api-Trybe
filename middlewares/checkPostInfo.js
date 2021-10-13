const { Category } = require('../models');

const infos = {
  title: 'title',
  content: 'content',
  categoryIds: 'categoryIds',
};

const validateInfo = (info, name) => {
  if (!info) {
    return ({ status: 400, message: `"${name}" is required` });
  }

  return false;
};

const validateCategoryIds = async (categoryIds) => {
  const categories = await Category.findAll({ where: { id: categoryIds } });

  if (categories.length !== categoryIds.length) {
    return ({ status: 400, message: '"categoryIds" not found' });
  }

  return false;
};

const checkPostInfo = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  const validatedTitle = validateInfo(title, infos.title);

  if (validatedTitle.status) {
    return res.status(validatedTitle.status).json({ message: validatedTitle.message }); 
  }

  const validatedContent = validateInfo(content, infos.content);

  if (validatedContent.status) {
    return res.status(validatedContent.status).json({ message: validatedContent.message }); 
  }
  const validatedCategoryIds = validateInfo(categoryIds, infos.categoryIds);

  if (validatedCategoryIds.status) {
    return res.status(validatedCategoryIds.status).json({ message: validatedCategoryIds.message }); 
  }

  const existingCategoryIds = await validateCategoryIds(categoryIds);

  if (existingCategoryIds.status) {
    return res.status(existingCategoryIds.status).json({ message: existingCategoryIds.message }); 
  }

  next();
};

module.exports = { checkPostInfo };
