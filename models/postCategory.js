module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {}, { tableName: 'PostCategories',
    timestamp: false,
  });
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: 'PostCategory',
      foreingKey: 'postId',
      otherKey: 'categoryId',
      as: 'category',
    });
    models.Category.belongsToMany(models.BlogPost, {
      through: 'PostCategory',
      foreingKey: 'categoryId',
      otherKey: 'postId',
      as: 'post',
    });
  };
  return PostCategory;
};
