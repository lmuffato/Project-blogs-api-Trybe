const {
  HTTP_400,
  titleRequired,
  contentRequired,
  categoryIdsRequired,
} = require('../helpers');

const ifTitleExists = (req, res, next) => {
  const { title } = req.body;

  if (!title) {
    return res.status(HTTP_400).json(titleRequired);
  }
  next();
};

const ifContentExists = (req, res, next) => {
  const { content } = req.body;

  if (!content) {
    return res.status(HTTP_400).json(contentRequired);
  }
  next();
};

const ifCategoryIdsExist = (req, res, next) => {
  const { categoryIds } = req.body;

  if (categoryIds === undefined) { 
    return res.status(HTTP_400).json(categoryIdsRequired);
  }
  next();
};

module.exports = {
  ifTitleExists,
  ifContentExists,
  ifCategoryIdsExist,
};