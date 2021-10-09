const { Post, User } = require('../models');
const Schema = require('../utils/schema');

const create = async (data, { id: userId }) => {
  const { error } = Schema.Posts.validate(data);
  if (error) return { status: 400, message: error.details[0].message };
  
  const { categoryIds, title, content } = data;
  console.log(userId);
  const post = await Post.create({ title, content, userId });
  console.log(post);
  
  return { status: 201, data: post };
};

const getAll = async () => {
  const posts = await Post.findAll();

  return { status: 200, data: [posts[0].dataValues] };
};

const getById = async (id) => {
  const post = await Post.findByPk(id, { includes: { model: User } });
  if (!post) return { status: 404, message: 'Post does not exist' };

  return { status: 200, data: { post } };
};

module.exports = {
  create,
  getAll,
  getById,
};