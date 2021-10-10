const schema = require('../utils/schema');

const check = (data) => {
  const { error } = schema.User.validate(data);
  if (error) return { status: 400, message: error.details[0].message };
  return false;
};

module.exports = {
  check,
};
