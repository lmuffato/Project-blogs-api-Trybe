const validations = require('./validations');

const createCategories = async (name) => {
  const validateInsertedBodyError = validations
    .validateBodyCreateCategories({ name });
  if (validateInsertedBodyError) {
    return { numberStatus: 400, message: validateInsertedBodyError.details[0].message };
  }
};

module.exports = {
  createCategories,
};
