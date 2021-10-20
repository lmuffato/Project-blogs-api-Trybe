module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define(
    'PostsCategories', {}, { tableName: 'PostsCategories', timestamps: false },
  );

  PostsCategories.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, {
      as: 'categories',
      through: PostsCategories,
      foreignKey: 'BlogPostId',
      otherKey: 'CategoryId',
    });
    models.Categories.belongsToMany(models.BlogPosts, {
      as: 'blog_posts',
      through: PostsCategories,
      foreignKey: 'CategoryId',
      otherKey: 'BlogPostId',
    });
  };

  return PostsCategories;
};