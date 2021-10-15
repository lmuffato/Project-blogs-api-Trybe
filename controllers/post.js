const { BlogPost, User } = require('../models');

module.exports = {
  async create(req, res) {
    const { title, content, categoryIds } = req.body;
    const { email } = req.user;
    try {
      const user = await User.findAll({ where: { email } });
      const post = await BlogPost.create(
        { userId: user[0].dataValues.id, title, content, categoryIds },
      );
      return res.status(201).json(post.dataValues);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async get(req, res) {
    try {
      const posts = await BlogPost.findAll({
        include: [
          { all: true }, { model: User, as: 'user', attributes: { exclude: ['password'] } },
        ],
      });
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};
