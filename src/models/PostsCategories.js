const PostsCategories = (sequelize, _DataTypes) => {
  const postsCategories = sequelize.define('PostsCategories', {},
  { timestamps: false });

  PostsCategories.associate = (models) => {
    models.Categories.belongsToMany(models.BlogPosts, {
      as: 'blogPosts',
      through: PostsCategories,
      foreignkey: 'categoryId',
      otherkey: 'postId',
    });
    models.BlogPosts.belongsToMany(models.Categories, {
      as: 'categories',
      through: PostsCategories,
      foreignkey: 'postId',
      otherkey: 'categoryId',
    });
  };

  return postsCategories;
};
  
module.exports = PostsCategories;
