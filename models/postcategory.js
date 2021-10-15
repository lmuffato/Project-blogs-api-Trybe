module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',
  {},
  { tableName: 'PostsCategories', timestamps: false });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return PostCategory;
};