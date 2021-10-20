const { BlogPost } = require('../models');
const { User } = require('../models');

const createPost = async (dataPost, email) => {
  const { id } = await User.findOne({ where: { email } });
  const { title, content } = dataPost;

  const { id: idPost } = await BlogPost.create({
    userId: id, title, content, published: new Date(), updated: new Date(),
  });
  const postId = await BlogPost.findByPk(
    idPost,
    { attributes: { exclude: ['published', 'updated'] } },
  );

  return { status: 201, data: postId };
};

module.exports = {
  createPost,
};