const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../models');
const findAllPosts = require('./findAllPosts');

const getPosts = async (query) => {
  const AllPost = await findAllPosts();
  if (!query) return AllPost;

  const posts = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${query}%` } },
        { content: { [Op.like]: `%${query}%` } },
      ],
    },
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories' },
    ],
  });

  return posts;
};

module.exports = async (query) => {
  const post = await getPosts(query);
  return post;
};