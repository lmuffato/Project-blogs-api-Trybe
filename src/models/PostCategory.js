const {
  Model,
} = require('sequelize');

module.exports = (sequelize, _DataTypes) => {
  class PostCategory extends Model {
    static associate(models) {
      models.Category.belongsToMany(models.BlogPost,
        { association: 'blogPosts', through: this, foreignKey: 'categoryId', otherKey: 'postId' });
      models.BlogPost.belongsToMany(models.Category, 
        { association: 'categories', through: this, foreignKey: 'postId', otherKey: 'categoryId' });
    }
  }
  PostCategory.init({}, {
    sequelize,
    modelName: 'PostCategory',
    tableName: 'PostsCategories',
    timestamps: false,
    underscored: true,
  });
  return PostCategory;
};