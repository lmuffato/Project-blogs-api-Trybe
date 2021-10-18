module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {}, { timestamp: false });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
        as: 'category',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      });
    };

    PostCategory.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost, {
        as: 'blogpost',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
    };
  
  return PostCategory;
};