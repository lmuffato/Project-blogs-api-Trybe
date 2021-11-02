const {
  status: { BAD_REQUEST },
} = require('../../utils');

const required = {
  status: BAD_REQUEST,
  title: '"title" is required',
  content: '"content" is required',
  categoryId: '"categoryIds" is required',
  categoryIds: '"categoryIds" not found',
};

module.exports = {
 required,
};
