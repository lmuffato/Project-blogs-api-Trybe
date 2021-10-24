const { Model } = require('sequelize');

module.exports = (sequelize, _DataTypes) => {
  class PostCategory extends Model {
    static associate(models) { // N:N
      models.Category.belongsToMany(models.BlogPost,
        { as: 'blogPosts', through: PostCategory, foreignKey: 'categoryId', otherKey: 'postId' });
      models.BlogPost.belongsToMany(models.Category,
        { as: 'categories', through: PostCategory, foreignKey: 'postId', otherKey: 'categoryId' });
    }
  }
  PostCategory.init({}, {
    sequelize,
    modelName: 'PostCategory',
    tableName: 'PostsCategories',
    timestamps: false,
  });
  return PostCategory;
};