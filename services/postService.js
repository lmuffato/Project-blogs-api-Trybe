const { BlogPost } = require('../models');

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

module.exports = {
  create,
};
