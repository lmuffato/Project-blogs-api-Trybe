const { BlogPost, Category } = require('../../models');
const postSchema = require('../../schemas/blogPost');

module.exports = async (postNewData, id, userId) => {
  const { error } = postSchema.blogPostUpdateValidations(postNewData);
  if (error) return { status: 400, message: error.details[0].message };

  const post = await BlogPost.findOne({ where: { id } });
  if (!post) return { status: 404, message: 'Post does not exist' };

  if (+userId !== post.userId) return { status: 401, message: 'Unauthorized user' };

  await BlogPost.update(
    postNewData, { where: { id } },
  );

  const updatedPost = await BlogPost.findOne({
    where: { id },
    attributes: { exclude: ['id', 'published', 'updated'] },
    include: [
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return updatedPost;
};