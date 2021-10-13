const {
  Model,
} = require('sequelize');

// eslint-disable-next-line max-lines-per-function
module.exports = (sequelize, _DataTypes) => {
  class PostCategory extends Model {
    static associate(models) {
      models.Category.belongsToMany(models.BlogPost,
        {
          association: 'blogPosts',
          through: this,
          foreignKey: 'id',
          otherKey: 'id',
        });
      models.BlogPost.belongsToMany(models.Category,
        {
          association: 'categories',
          through: this,
          foreignKey: 'id',
          otherKey: 'id',
        });
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