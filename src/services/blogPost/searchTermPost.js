const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../../models');

module.exports = async (query) => {
  const posts = await BlogPost.findAll(
    { 
      where: { 
      [Op.or]: [
        { title: { [Op.like]: `%${query}%` } },
        { content: { [Op.like]: `%${query}%` } },
      ] },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    },
  );

  return posts;
};