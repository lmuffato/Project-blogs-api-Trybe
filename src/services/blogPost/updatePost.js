const { BlogPost, Category } = require('../../models');
const postSchema = require('../../schemas/blogPost');

module.exports = async (postNewData, id) => {
  const { error } = postSchema.blogPostUpdateValidations(postNewData);

  if (error) return { status: 400, message: error.details[0].message };

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

  if (!updatedPost) return { message: 'post not found' };
  return updatedPost;
};