const STATUS = require('../util/status');
const { postBlogPostValidate } = require('../schema/validationSchema');
const categoryService = require('../services/categoryService');

const validatePost = (req, _res, next) => {
  const { title, content, categoryIds } = req.body;
  const { error } = postBlogPostValidate.validate({ title, content, categoryIds });
  if (error) {
    return next({
      err: { message: error.details[0].message },
      statusCode: STATUS.STATUS_400_BAD_REQUEST,
    });
  }
  next();
};

// https://advancedweb.hu/how-to-use-async-functions-with-array-map-in-javascript/

const verifyCategoryIds = async (req, _res, next) => {
  try {
    const { categoryIds } = req.body;
    const categories = await Promise.all(categoryIds.map(
      async (id) => await categoryService.getById(id)
    ));
    if (categories.includes(null)) {
      return next({
        err: { message: '"categoryIds" not found' },
        statusCode: STATUS.STATUS_400_BAD_REQUEST,
      });
    }
    next();
  } catch (e) {
    next (e);
  }
};

module.exports = {
  validatePost,
  verifyCategoryIds,
}
