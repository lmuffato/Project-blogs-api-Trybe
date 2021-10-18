module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategories', {}, { timestamp: false });
  PostsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.categories, {
      as: 'categories',
      through: PostsCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };
  PostsCategory.associate = (models) => {
    models.Categories.belongsToMany(models.BlogPosts, {
      as: 'blogPosts',
      through: PostsCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  return PostsCategory;
};