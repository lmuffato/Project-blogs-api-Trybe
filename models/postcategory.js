module.exports = (sequelize, _DataTypes) => {
  const postCategory = sequelize.define('PostCategory', {
  }, { timestamps: false, tableName: 'PostsCategories' });
  postCategory.associate = (models) => {
    models.Category.belongsToMany(models.Post, {
      as: 'posts',
      through: postCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.Post.belongsToMany(models.Category, {
      as: 'categories',
      through: postCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };
  return postCategory;
};