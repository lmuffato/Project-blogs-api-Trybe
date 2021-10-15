const { schemaCreateCategory } = require('../validations/validations');

const validationCreateCategory = async (req, res, next) => {
  const { error } = schemaCreateCategory.validate(req.body);
  if (error) {
    return res.status(400)
    .json({ message: error.message });
  }
    next();
};

module.exports = {
  validationCreateCategory,
};
