const { BlogPost } = require('../models');

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, { raw: true });
  return post;
};

const createPost = async (data) => {
    const { dataValues } = await BlogPost.create(data);
    return dataValues;
};

module.exports = { getPostById, createPost };