const { BlogPost, Category, User } = require('../models');

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

const getPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { status: 200, data: posts };
};

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(
    id,
    {
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    },
  );
  if (!post) return { status: 404, data: { message: 'Post does not exist' } };
  return { status: 200, data: post };
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
};