module.exports = (sequelize) => {
  const PostsCategories = sequelize.define('PostsCategories', {},
    { timestamps: false, tableName: 'PostsCategories' });

  PostsCategories.associate = (models) => {
    models.blogPosts.belongsToMany(models.categories, {
      as: 'categories',
      through: PostsCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

    models.categories.belongsToMany(models.blogPosts, {
      as: 'posts',
      through: PostsCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostsCategories;
};