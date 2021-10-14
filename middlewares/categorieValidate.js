const { postCategorieValidate } = require('../schema/validationSchema');
const STATUS = require('../util/status');

const validateCategorie = (req, _res, next) => {
  const { name } = req.body;
  const { error } = postCategorieValidate.validate({ name });
  if (error) {
    return next({
      err: { message: error.details[0].message },
      statusCode: STATUS.STATUS_400_BAD_REQUEST,
    });
  }
  next();
};

module.exports = {
  validateCategorie,
};
