const { BlogPost, User, Category } = require('../models');

const create = async (title, content, userId) => {
  try {
    const created = await BlogPost.create({
      title,
      content,
      userId,
      published: new Date(),
      updated: new Date(),
    });
    const toReturn = {
      id: created.id,
      title: created.title,
      content: created.content,
      userId: created.userId,
    };
    return toReturn;
  } catch (e) {
    console.log(e);
  }
};

// tutorial do uso do include https://sequelize.org/master/manual/eager-loading.html

const getAll = async () => {
  try {
    const posts = await BlogPost.findAll({
      include: [
        {
          model: Category, as: 'categories',
        },
        {
          model: User, as: 'user',
        },
      ],
    });
    return posts;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  create,
  getAll,
};
