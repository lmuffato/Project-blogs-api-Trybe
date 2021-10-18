const validationSchema = require('../helpers/validation_schema');
const { BlogPost, Category, User } = require('../models');

const createPost = async (data, user) => {
  const { error } = validationSchema.postSchema.validate(data);
  if (error) return { statusCode: 400, message: error.details[0].message };
  const { categoryIds: id } = data;
  const categoryExists = await Category.findOne({ where: { id } });
  if (!categoryExists) return { statusCode: 400, message: '"categoryIds" not found' };
  const { title, content } = data;
  const { id: userId } = user;
  const blogpost = await BlogPost.create({
    userId, title, content, published: new Date(), updated: new Date() });
  return { statusCode: 201, blogpost };
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: {
        exclude: ['password'],
      } }, {
      model: Category,
      as: 'categories',
      attributes: {
        exclude: ['PostId'],
      } }],
  });
  return { statusCode: 200, posts };
};

const getById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [{
      model: User,
      as: 'user',
      attributes: {
        exclude: ['password'],
      } }, {
        model: Category,
        as: 'categories',
        attributes: {
          exclude: ['PostId'],
        } }],
  });
  if (!post) return { statusCode: 404, message: 'Post does not exist' };
  return { statusCode: 200, post };
};

module.exports = {
  createPost,
  getAllPosts,
  getById,
};
