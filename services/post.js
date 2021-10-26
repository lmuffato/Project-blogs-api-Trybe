const { BlogPost } = require('../models');
const { status: { CREATED } } = require('../utils');

const create = (title, categoryIds, content) => {
  const post = BlogPost.create({ title, categoryIds, content });
  return {
    status: CREATED,
    message: post,
  };
};

module.exports = { create };
